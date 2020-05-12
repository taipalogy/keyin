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

const topic: Group = new Group();
const slicedReadings: string[] = [];
const literals: string[] = [];
let entries: Entry[] = [];
const hints: Array<Hint> = new Array();
const highlights: string[] = [];
const idx = 0;

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

function getGroup(): void {
  entries = topic.entries;

  const clt = new Client();
  for (let i = 0; i < topic.entries.length; i++) {
    const ta = clt.processTonal(topic.entries[i].reading);
    literals[i] = ta.word.literal;
    const h = new Hint();
    for (let e of ta.soundSequences) {
      for (let j of e) {
        h.namesOfSound.push(j.name);
        h.sounds.push(j.toString());
      }
      h.hint = namesInHanji.get(h.namesOfSound[0]) + ' ' + h.namesOfSound[0];
    }
    highlights[i] = h.sounds[0];
    let sliced = literals[i].slice(highlights[i].length);
    slicedReadings[i] = sliced;
    hints.push(h);
  }
}

getGroup();

function setHintAndHighlight(index: number, n: number) {
  if (
    hints[index].namesOfSound[n] === TonalSoundTags.freeTonal ||
    hints[index].namesOfSound[n] === TonalSoundTags.checkedTonal
  ) {
    if (tonalInHanji.has(hints[index].sounds[n])) {
      let tonal: string = '';
      tonal = tonalInHanji.get(hints[index].sounds[n]);
      hints[index].hint =
        namesInHanji.get(hints[index].namesOfSound[n]) +
        tonal +
        ' ' +
        hints[index].namesOfSound[n];
    }
  } else {
    hints[index].hint =
      namesInHanji.get(hints[index].namesOfSound[n]) +
      ' ' +
      hints[index].namesOfSound[n];
  }
  highlights[index] = hints[index].sounds[n];
}

function HintPage() {
  const [input, setInput] = useState('');

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  };

  const str: string = input;

  let len: number = 0;
  if (str.length > 0 && literals[idx].search(new RegExp(str)) == 0) {
    for (let j = 0; j < hints[idx].sounds.length; j++) {
      len += hints[idx].sounds[j].length;
      if (len >= str.length) {
        if (len > str.length) {
          setHintAndHighlight(idx, j);
        } else {
          if (j + 1 == hints[idx].sounds.length) {
            // last sound
            hints[idx].hint = '';
            highlights[idx] = '';
          } else {
            setHintAndHighlight(idx, j + 1);
          }
        }
        break;
      }
    }
  } else if (str.length == 0) {
    setHintAndHighlight(idx, 0);
  }

  if (len == str.length) {
    let sliced = literals[idx].slice(str.length);
    if (literals[idx].search(new RegExp(str)) == 0) {
      if (highlights[idx] != undefined) {
        let slicedTwo = sliced.slice(highlights[idx].length);
        slicedReadings[idx] = slicedTwo;
      }
    }
  } else if (len > str.length) {
  }

  return (
    <div>
      拍羅馬字, 顯示 hint
      <label>
        <br />
        <input type="text" list="words" value={input} onChange={handleChange} />
      </label>
      {highlights[idx]}, {slicedReadings[idx]}
      <br />
      {literals[idx]}
      <br />
      {len}
      <br />
      {len < literals[idx].length ? hints[idx].hint : ''}
    </div>
  );
}

export default HintPage;
