import { cleaner } from './cleaner';

export const decideWhatToken = ({ obj }) => (obj === '1' ? 'object' : 'default');

export const tokenizer = (text, options) => {
    if (!options) {
        throw new Error('Options object should be provided');
    }

    if (options.tokenizerType !== 'default' && options.tokenizerType !== 'object') {
        throw new Error(
            'Missing type tokenizerType on options object should be either "default" or "object"'
        );
    }
    const { tokenizerType } = options;
    const cleanText = cleaner(text).split(' ');
    const asObject = cleanText.reduce((acc, current) => ((acc[current] = acc[current] || 0), acc[current]++, acc), {});

    // TODO: get rid of this!
    delete asObject[''];

    if (tokenizerType === 'object') {
        return asObject;
    }

    const asArray = Object.keys(asObject).map((word) => ({
        name: word,
        repetitions: asObject[word],
    }));

    return asArray;
};
