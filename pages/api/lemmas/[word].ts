import { NextApiRequest, NextApiResponse } from 'next';
import { TonalLemmatizationAnalyzer, TonalLemmatizer } from 'taipa';

// this won't work on gh-pages because github hosts static sites only
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { word } } = req;

    const tl = new TonalLemmatizer();
    const lexemeLemma = tl.lemmatize(word as string);
    const lemmas = lexemeLemma.getLemmas().map(x => x.literal);
    const obj = Object.assign({ word: word }, { lemmas: lemmas });

    return res.json(obj);
};

export default handler;