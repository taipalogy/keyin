import { Client, TonalSpellingTags, graphAnalyzeTonal } from 'taipa';

/*
 * initial state:      target + tail
 * typing:      head + target + tail
 * before final state: target
 * final state:     no target
 */

class Hint {
  text: string = '';
  letters: Array<string> = new Array(); // positional letters
  spellingTags: Array<string> = new Array();
}

export class Highlight {
  posTarget: number = 0; // accumulated steps
  target: string = ''; // where you are up to
  tail: string = ''; // remainings
  hint: Hint = new Hint();
}

export class Entry {
  index: number = 0;
  hanyjiz: string = '';
  lurzmafjiz: string = '';
}

const toneNumbersInHanji = new Map()
  .set('f', '一')
  .set('y', '二')
  .set('w', '三')
  .set('x', '五')
  .set('z', '七')
  .set('xx', '九');

const soundNamesInHanji = new Map()
  .set(TonalSpellingTags.initialConsonant, '初聲')
  .set(TonalSpellingTags.vowel, '中聲')
  .set(TonalSpellingTags.nasalization, '鼻音化')
  .set(TonalSpellingTags.stopFinalConsonant, '終聲')
  .set(TonalSpellingTags.nasalFinalConsonant, '終聲')
  .set(TonalSpellingTags.freeTone, '聲調')
  .set(TonalSpellingTags.checkedTone, '聲調');

export class Highlighter {
  tails: string[] = [];
  literals: string[] = [];
  hints: Array<Hint> = new Array();
  targets: string[] = [];

  constructor(private entries: Entry[]) {
    this.getGroup();
  }

  private getGroup(): void {
    const clt = new Client();
    for (let i = 0; i < this.entries.length; i++) {
      const ta = clt.processTonal(this.entries[i].lurzmafjiz);
      this.literals[i] = ta.word.literal;
      const h = new Hint();
      for (const e of ta.letterSequences) {
        for (const j of e) {
          h.spellingTags.push(j.name);
          h.letters.push(j.toString());
        }
        h.text =
          soundNamesInHanji.get(h.spellingTags[0]) + ' ' + h.spellingTags[0];
      }
      this.targets[i] = h.letters[0];
      const sliced = this.literals[i].slice(this.targets[i].length);
      this.tails[i] = sliced;
      this.hints.push(h);
    }
  }

  setHintAndTarget(index: number, n: number) {
    if (
      this.hints[index].spellingTags[n] === TonalSpellingTags.freeTone ||
      this.hints[index].spellingTags[n] === TonalSpellingTags.checkedTone
    ) {
      if (toneNumbersInHanji.has(this.hints[index].letters[n])) {
        let tonal: string = '';
        tonal = toneNumbersInHanji.get(this.hints[index].letters[n]);
        this.hints[index].text =
          soundNamesInHanji.get(this.hints[index].spellingTags[n]) +
          tonal +
          ' ' +
          this.hints[index].spellingTags[n];
      }
    } else {
      this.hints[index].text =
        soundNamesInHanji.get(this.hints[index].spellingTags[n]) +
        ' ' +
        this.hints[index].spellingTags[n];
    }
    this.targets[index] = this.hints[index].letters[n];
  }

  getTarget(strInput: string, idx: number) {
    let idxTarget: number = 0;
    if (
      strInput.length > 0 &&
      this.literals[idx].search(new RegExp(strInput)) == 0
    ) {
      for (let j = 0; j < this.hints[idx].letters.length; j++) {
        idxTarget += this.hints[idx].letters[j].length;
        if (idxTarget >= strInput.length) {
          if (idxTarget > strInput.length) {
            this.setHintAndTarget(idx, j);
          } else {
            if (j + 1 == this.hints[idx].letters.length) {
              // last spelling tag
              this.hints[idx].text = '';
              this.targets[idx] = '';
            } else {
              this.setHintAndTarget(idx, j + 1);
            }
          }
          break;
        }
      }
    } else if (strInput.length == 0) {
      this.setHintAndTarget(idx, 0);
    }

    if (idxTarget == strInput.length) {
      let targetPlusTail = this.literals[idx].slice(strInput.length);
      if (this.literals[idx].search(new RegExp(strInput)) == 0) {
        if (this.targets[idx] != undefined) {
          this.tails[idx] = targetPlusTail.slice(this.targets[idx].length);
        }
      }
    } else if (idxTarget > strInput.length) {
      const gsLiteral = graphAnalyzeTonal(this.literals[idx]);
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
        this.tails[idx] = this.literals[idx].slice(idxTailBegin);
      }
    }
    const hl = new Highlight();
    hl.posTarget = idxTarget;
    hl.target = this.targets[idx];
    hl.tail = this.tails[idx];
    hl.hint = this.hints[idx];
    return hl;
  }
}
