import { PositionalLetter } from 'taipa';

export function getInflectionalSuffixes(ending: string) {
    const desinences: string[] = [];
    if(ending) {
        desinences.push(ending);
        return desinences;
    }
    return desinences;
}

export function getStems(literal: string, ending: string) {
    const l = literal
    const ie = ending
    const stems: string[] = [];
    if(l.length-ie.length != 0) {
        stems.push(l.substr(0, l.length-ie.length))
        return stems;
    }
    return stems;
}

export function getLetterSequences(letterSeqs: PositionalLetter[][]) {
    const letters = [];
    for(let j in letterSeqs) {
        for(let k in letterSeqs[j]) {
            const ltr = letterSeqs[j][k]
            letters.push([ltr.toString(), ltr.name]);
        }
    }
    return letters;
}

export function getSurfaceForms(underlying: string, surface: string) {
    const forms: string[] = [];
    if(underlying && surface && underlying !== surface) {
        forms.push(surface);
        return forms;
    }
    return forms;
}

export function itemize(str: string) {
    const items: string[] = [];
    if(str) {
        items.push(str);
        return items;
    }
    return items;
}