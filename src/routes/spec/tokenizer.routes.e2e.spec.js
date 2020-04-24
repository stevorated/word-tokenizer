import { tokenizerRouter } from '../tokenizer.routes';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import request from 'supertest';

jest.setTimeout(process.env.JEST_TIMEOUT || 40000);

const createTestApp = () => {
    const app = express();

    app.use(cors());
    app.use(compression({ credentials: true, origin: true }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.send('bla bla');
    });
    return app;
};

describe('E2E tokenizer routes', () => {
    let app;
    let server;
    let port;

    beforeEach(() => {
        port = Math.round(Math.random() * 400) + 4000;
        app = createTestApp();

        app.use('/', tokenizerRouter);

        server = app.listen(port, () => {});
    });

    afterEach(async () => {
        server.close();
    });

    describe('GET /tokenize-my-bible', () => {
        test('should return bible parsed as array', async () => {
            await request(app)
                .get('/tokenize-bible')
                .expect((response) => {
                    expect(response.body.length).toBe(12899);
                    expect(response.body).toMatchSnapshot();
                });
        });
    });

    describe('GET /tokenize-my-bible/?obj=1', () => {
        test('should return bible parsed as an object', async () => {
            await request(app)
                .get('/tokenize-bible')
                .expect((response) => {
                    expect(Object.keys(response.body).length).toBe(12899);
                    expect(response.body).toMatchSnapshot();
                });
        });
    });

    describe('GET /tokenize-me', () => {
        test('should return as expected when all good', async () => {
            await request(app)
                .get('/tokenize-me')
                .send({ url: 'http://www.gutenberg.org/cache/epub/10/pg10.txt' })
                .expect((response) => {
                    expect(response.body.length).toBe(12899);
                    expect(response.body).toMatchSnapshot();
                });
        });
    });

    test('should return proper message when link is bad', async () => {
        await request(app)
            .get('/tokenize-me')
            .send({ url: 'http://thebaddestlink.com/sheker.txt' })
            .expect((response) => {
                expect(response.body).toStrictEqual({
                    error:
                        '[ERROR]: The url you gave has no text in it, please check it returns a txt file',
                });
                expect(response.body).toMatchSnapshot();
            });
    });

    test('should return proper message when no body', async () => {
        await request(app)
            .get('/tokenize-me')
            .expect((response) => {
                expect(response.body).toStrictEqual({
                    error: '[ERROR]: The url must be provided in the body of the request',
                });

                expect(response.body).toMatchSnapshot();
            });
    });
});
