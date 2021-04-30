import { FetchAnswers } from './fetchAnswer';

const session = {
    sessionId: '',
    genNo: 1,
    acSession: { sessionId: '', genNo: 1 },
};

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => new Error('failure'),
    }),
);

describe('test fetchAnswer on basis of offset and batchSize', () => {
    test('should return getAnswer null because of wrong parameters', async () => {
        const fetchAnswer = new FetchAnswers(
            session,
            'ChartData',
            'chartWithData',
            'http://10.79.135.124:3000',
        );
        const data = await fetchAnswer.getAnswer(1, 3);
        expect(data).toEqual(undefined);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
