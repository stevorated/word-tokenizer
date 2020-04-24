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
    const cleanTextArray = cleaner(text).split(' ');
    const asObject = cleanTextArray.reduce(
        (acc, current) => ((acc[current] = acc[current] || 0), acc[current]++, acc),
        {}
    );

    delete asObject[''];

    if (tokenizerType === 'object') {
        return asObject;
    }

    const asArray = Object.entries(asObject).map(([word, repetitions]) => ({
        word,
        repetitions,
    }));

    return asArray;
};
