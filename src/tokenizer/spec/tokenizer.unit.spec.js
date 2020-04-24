import { tokenizer, decideWhatToken } from '../tokenizer';

describe('DecideWhatToken Unit Tests', () => {
    test('should return "object"', () => {
        const mockParams = { obj: '1' };

        const res = decideWhatToken(mockParams);

        expect(res).toBe('object');
    });

    test('should return "object"', () => {
        const mockParams = {};

        const res = decideWhatToken(mockParams);

        expect(res).toBe('default');
    });
});

describe('Tokenizer Unit tests', () => {
    test('is "default" should object type return - #1', () => {
        const cleaner = require('../cleaner');
        const spy = jest.spyOn(cleaner, 'cleaner');
        spy.mockImplementation(() => 'elephants are dirty great bastards elephants');

        const expectedReturn = [
            { word: 'elephants', repetitions: 2 },
            { word: 'are', repetitions: 1 },
            { word: 'dirty', repetitions: 1 },
            { word: 'great', repetitions: 1 },
            { word: 'bastards', repetitions: 1 },
        ];

        const textMock = 'elephants are dirty great bastards elephants';
        const mockOptions = { tokenizerType: 'default' };

        const tokenized = tokenizer(textMock, mockOptions);

        expect(tokenized).toStrictEqual(expectedReturn);
    });
});
