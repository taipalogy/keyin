import { NextApiRequest, NextApiResponse } from 'next';
import { TonalLemmatizationAnalyzer } from 'taipa';

// this won't work on gh-pages because github hosts static sites only
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { word } } = req;

    const tla = new TonalLemmatizationAnalyzer();
    const lexemeLemma = tla.analyze(word as string);
    const lemmas = lexemeLemma.getLemmata().map(x => x.literal);
    const obj = Object.assign({ word: word }, { lemmas: lemmas });

    return res.json(obj);
};

export default handler;