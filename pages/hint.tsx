import { useState } from 'react';
import { Client, TonalSoundTags } from 'taipa';

class Hint {
  hint: string = '';
  sounds: Array<string> = new Array();
  namesOfSound: Array<string> = new Array();
}

class Entry {
  constructor(public reading: string) {}
}

class Group {
  entries: Entry[] = [new Entry('hoefcia'), new Entry('hefcia')];
}

const tonalInHanji = new Map()
  .set('f', '一')
  .set('y', '二')
  .set('w', '三')
  .set('x', '五')
  .set('z', '七')
  .set('xx', '九');

const namesInHanji = new Map()
  .set('initial', '初聲')
  .set('medial', '中聲')
  .set('nasalization', '鼻音化')
  .set('stopFinal', '終聲')
  .set('nasalFinal', '終聲')
  .set('freeTonal', '聲調')
  .set('checkedTonal', '聲調');

class HintProcessor {
  topic: Group = new Group();
  slicedReadings: string[] = [];
  literals: string[] = [];
  entries: Entry[] = [];
  hints: Array<Hint> = new Array();
  highlights: string[] = [];
  idx = 0;

  constructor() {
    this.getGroup();
  }
  getGroup(): void {
    this.entries = this.topic.entries;

    const clt = new Client();
    for (let i = 0; i < this.topic.entries.length; i++) {
      const ta = clt.processTonal(this.topic.entries[i].reading);
      this.literals[i] = ta.word.literal;
      const h = new Hint();
      for (let e of ta.soundSequences) {
        for (let j of e) {
          h.namesOfSound.push(j.name);
          h.sounds.push(j.toString());
        }
        h.hint = namesInHanji.get(h.namesOfSound[0]) + ' ' + h.namesOfSound[0];
      }
      this.highlights[i] = h.sounds[0];
      let sliced = this.literals[i].slice(this.highlights[i].length);
      this.slicedReadings[i] = sliced;
      this.hints.push(h);
    }
  }

  setHintAndHighlight(index: number, n: number) {
    if (
      this.hints[index].namesOfSound[n] === TonalSoundTags.freeTonal ||
      this.hints[index].namesOfSound[n] === TonalSoundTags.checkedTonal
    ) {
      if (tonalInHanji.has(this.hints[index].sounds[n])) {
        let tonal: string = '';
        tonal = tonalInHanji.get(this.hints[index].sounds[n]);
        this.hints[index].hint =
          namesInHanji.get(this.hints[index].namesOfSound[n]) +
          tonal +
          ' ' +
          this.hints[index].namesOfSound[n];
      }
    } else {
      this.hints[index].hint =
        namesInHanji.get(this.hints[index].namesOfSound[n]) +
        ' ' +
        this.hints[index].namesOfSound[n];
    }
    this.highlights[index] = this.hints[index].sounds[n];
  }

  getCurrentLen(str: string) {
    // let rd = new Reading();
    let len: number = 0;
    if (
      str.length > 0 &&
      this.literals[this.idx].search(new RegExp(str)) == 0
    ) {
      for (let j = 0; j < this.hints[this.idx].sounds.length; j++) {
        len += this.hints[this.idx].sounds[j].length;
        if (len >= str.length) {
          if (len > str.length) {
            this.setHintAndHighlight(this.idx, j);
          } else {
            if (j + 1 == this.hints[this.idx].sounds.length) {
              // last sound
              this.hints[this.idx].hint = '';
              this.highlights[this.idx] = '';
            } else {
              this.setHintAndHighlight(this.idx, j + 1);
            }
          }
          break;
        }
      }
    } else if (str.length == 0) {
      this.setHintAndHighlight(this.idx, 0);
    }

    if (len == str.length) {
      let sliced = this.literals[this.idx].slice(str.length);
      if (this.literals[this.idx].search(new RegExp(str)) == 0) {
        if (this.highlights[this.idx] != undefined) {
          let slicedTwo = sliced.slice(this.highlights[this.idx].length);
          this.slicedReadings[this.idx] = slicedTwo;
        }
      }
    } else if (len > str.length) {
    }
    return len;
  }
}

function HintPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const hp = new HintProcessor();
  const len = hp.getCurrentLen(input);

  return (
    <div>
      拍羅馬字, 顯示 hint
      <label>
        <br />
        <input type="text" list="words" value={input} onChange={handleChange} />
      </label>
      {hp.highlights[hp.idx]}, {hp.slicedReadings[hp.idx]}
      <br />
      {hp.literals[hp.idx]}
      <br />
      {len}
      <br />
      {len < hp.literals[hp.idx].length ? hp.hints[hp.idx].hint : ''}
    </div>
  );
}

export default HintPage;
