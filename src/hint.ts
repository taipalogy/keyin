import { Client, TonalSoundTags, graphAnalyzeTonal } from 'taipa';

class Hint {
  hint: string = '';
  sounds: Array<string> = new Array();
  namesOfSound: Array<string> = new Array();
}

export class Entry {
  constructor(public reading: string) {}
}

export class Group {
  // a set of words
  entries: Entry[] = [];
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

export class HintProcessor {
  tails: string[] = [];
  literals: string[] = [];
  entries: Entry[] = [];
  hints: Array<Hint> = new Array();
  targets: string[] = [];
  idx = 0;

  constructor(private group: Group) {
    this.getGroup();
  }

  private getGroup(): void {
    this.entries = this.group.entries;

    const clt = new Client();
    for (let i = 0; i < this.group.entries.length; i++) {
      const ta = clt.processTonal(this.group.entries[i].reading);
      this.literals[i] = ta.word.literal;
      const h = new Hint();
      for (const e of ta.soundSequences) {
        for (const j of e) {
          h.namesOfSound.push(j.name);
          h.sounds.push(j.toString());
        }
        h.hint = namesInHanji.get(h.namesOfSound[0]) + ' ' + h.namesOfSound[0];
      }
      this.targets[i] = h.sounds[0];
      const sliced = this.literals[i].slice(this.targets[i].length);
      this.tails[i] = sliced;
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
    this.targets[index] = this.hints[index].sounds[n];
  }

  getCurrentLen(strInput: string) {
    let idxTarget: number = 0;
    if (
      strInput.length > 0 &&
      this.literals[this.idx].search(new RegExp(strInput)) == 0
    ) {
      for (let j = 0; j < this.hints[this.idx].sounds.length; j++) {
        idxTarget += this.hints[this.idx].sounds[j].length;
        if (idxTarget >= strInput.length) {
          if (idxTarget > strInput.length) {
            this.setHintAndHighlight(this.idx, j);
          } else {
            if (j + 1 == this.hints[this.idx].sounds.length) {
              // last sound
              this.hints[this.idx].hint = '';
              this.targets[this.idx] = '';
            } else {
              this.setHintAndHighlight(this.idx, j + 1);
            }
          }
          break;
        }
      }
    } else if (strInput.length == 0) {
      this.setHintAndHighlight(this.idx, 0);
    }

    if (idxTarget == strInput.length) {
      let targetPlusTail = this.literals[this.idx].slice(strInput.length);
      if (this.literals[this.idx].search(new RegExp(strInput)) == 0) {
        if (this.targets[this.idx] != undefined) {
          this.tails[this.idx] = targetPlusTail.slice(
            this.targets[this.idx].length
          );
        }
      }
    } else if (idxTarget > strInput.length) {
      const gsLiteral = graphAnalyzeTonal(this.literals[this.idx]);
      const gsInput = graphAnalyzeTonal(strInput);
      let idxSlicing: number = 0;
      for (let i = 0; i < gsLiteral.length; i++) {
        if (
          gsLiteral[i].letter.literal.length != gsInput[i].letter.literal.length
        ) {
          idxSlicing = i + 1; // i plus 1 for the argument of slice
          break;
        }
      }

      const slicedGsLiteral = gsLiteral.slice(0, idxSlicing);
      const lensSlicedGsLiteral = slicedGsLiteral.map(
        it => it.letter.literal.length
      );
      const idxTailBegin: number =
        lensSlicedGsLiteral.length > 0
          ? lensSlicedGsLiteral.reduce((prev, curr) => prev + curr)
          : 0;
      if (idxSlicing) {
        this.tails[this.idx] = this.literals[this.idx].slice(idxTailBegin);
      }
    }
    return idxTarget;
  }
}
