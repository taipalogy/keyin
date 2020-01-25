import { Sound } from 'taipa/lib/grapheme';

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

export function getSoundSequences(soundSeqs: Sound[][]) {
    const snds = [];
    for(let j in soundSeqs) {
        for(let k in soundSeqs[j]) {
            const snd = soundSeqs[j][k]
            snds.push([snd.toString(), snd.name]);
        }
    }
    return snds;
}

export function getSurfaceForms(underlying: string, surface: string) {
    const forms: string[] = [];
    if(underlying && surface && underlying !== surface) {
        forms.push(surface);
        return forms;
    }
    return forms;
}