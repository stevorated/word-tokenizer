import { tokenizer } from '../tokenizer';

describe('Tokenizer Integration tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('when tokenizerType', () => {
        test('is "default" should object type return - #1', () => {
            const expectedReturn = [
                { name: 'elephants', repetitions: 2 },
                { name: 'are', repetitions: 1 },
                { name: 'dirty', repetitions: 1 },
                { name: 'great', repetitions: 1 },
                { name: 'bastards', repetitions: 1 },
            ];

            const textMock = 'elephants are dirty great bastards elephants';
            const mockOptions = { tokenizerType: 'default' };

            const tokenized = tokenizer(textMock, mockOptions);

            expect(tokenized).toStrictEqual(expectedReturn);
        });

        test('is "object" should array type return', () => {
            const expectedReturn = { elephants: 2, are: 1, dirty: 1, great: 1, bastards: 1 };
            const textMock = 'elephants are dirty great bastards elephants';
            const mockOptions = { tokenizerType: 'object' };

            const tokenized = tokenizer(textMock, mockOptions);

            expect(tokenized).toStrictEqual(expectedReturn);
        });

        test('is NOT "object" should return error #1', () => {
            const textMock = 'elephants are dirty great bastards elephants';

            expect(() => tokenizer(textMock)).toThrow();

            try {
                tokenizer(textMock);
            } catch (error) {
                expect(error.message).toBe('Options object should be provided');
            }
        });

        test('is NOT "object" should return error #2', () => {
            const textMock = 'elephants are dirty great bastards elephants';

            expect(() => tokenizer(textMock, { tokenizerType: 'bla bla' })).toThrow();

            try {
                tokenizer(textMock, { tokenizerType: 'bla bla' });
            } catch (error) {
                expect(error.message).toBe(
                    'Missing type tokenizerType on options object should be either "default" or "object"'
                );
            }
        });
    });
});
