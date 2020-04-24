import { cleaner } from '../cleaner';

describe('Cleaner Unit Tests', () => {
    test('should parse text', () => {
        const mock = 'elephants$#$@$# 444are---- dirty666%%% great bastards------------elephants';

        const clean = cleaner(mock);

        expect(clean).toBe('elephants are dirty great bastards elephants');
    });
});
