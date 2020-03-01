import { useState } from 'react';
import { TonalLemmatizationAnalyzer, TonalLemmatizer, TonalInflector } from 'taipa';
import { getInflectionalSuffixes, getStems, getSoundSequences } from '../src/process';

function WordPage() {
    const [input, setInput] = useState();

    const tla = new TonalLemmatizationAnalyzer();

    const letters = tla.graphAnalyze(input).map(x => x.letter && x.letter.literal);

    const soudnSeqs = getSoundSequences(tla.morphAnalyze(input).map(x => x.sounds));

    const tl = new TonalLemmatizer();
    const lexemeLemma = tl.lemmatize(input);
    const stems = getStems(lexemeLemma.word.literal, lexemeLemma.getInflectionalEnding());
    const inflectionalSuffixes = getInflectionalSuffixes(lexemeLemma.getInflectionalEnding());
    const lemmas = lexemeLemma.getLemmas().map(x => x.literal);

    const ti = new TonalInflector();
    const lexemeInflect = ti.inflectDesinence(input);
    const proceedingForms = lexemeInflect.getForms().map(x => x.literal);

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    };

    return (
        <div>
            拍羅馬字, 輸出 lemmas, stem, inflectional suffix, proceeding forms, sound sequences, 甲 letters
            <label>
                <br />
                <input type="text" value={input} onChange={handleChange} />
            </label>
            <br />
            lemmas
            {lemmas.map(x => (
                <li>{x}</li>
            ))}
            <br />
            stem
            {stems.map(x => (
                <li>{x}</li>
            ))}
            <br />
            inflectional suffix
            {inflectionalSuffixes.map(x => (
                <li>{x}</li>
            ))}
            <br />
            proceeding forms
            {proceedingForms.map(x => (
                <li>{x}</li>
            ))}
            <br />
            sound sequences
            {soudnSeqs.map(x => (
                <li>{x[0] + ' - ' + x[1]}</li>
            ))}
            <br />
            letters: {letters.join(', ')}
        </div>
    );
}

export default WordPage;
