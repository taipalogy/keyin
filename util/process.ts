import { Sound } from 'taipa';

export function getInflectionalSuffixes(ending: string) {
  const desinences: string[] = [];
  if (ending) {
    desinences.push(ending);
    return desinences;
  }
  return desinences;
}

export function getStems(literal: string, ending: string) {
  const l = literal;
  const ie = ending;
  const stems: string[] = [];
  if (l.length - ie.length != 0) {
    stems.push(l.substring(0, l.length - ie.length));
    return stems;
  }
  return stems;
}

export function getSurfaceForms(underlying: string, surface: string) {
  const forms: string[] = [];
  if (underlying && surface && underlying !== surface) {
    forms.push(surface);
    return forms;
  }
  return forms;
}

export function itemize(str: string) {
  const items: string[] = [];
  if (str) {
    items.push(str);
    return items;
  }
  return items;
}
