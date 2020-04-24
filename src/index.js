import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import 'dotenv/config';

import { tokenizerRouter } from './routes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(compression({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (_, res) => {
    res.send([
        {
            route: `GET http://localhost:${PORT}/tokenizer/tokenize-bible`,
            description: 'return King James’ Bible tokenized as an array',
            queryString: [],
        },
        {
            route: `GET http://localhost:${PORT}/tokenizer/tokenize-bible/?obj=1`,
            description: 'return King James’ Bible tokenized as an object',
            queryString: [{ obj: '1' }],
        },
        {
            route: `GET http://localhost:${PORT}/tokenizer/tokenize-me/`,
            description:
                'return text retrieved off the url target provided in the request body tokenized as array',
            queryString: [{ obj: '1', require: false }],
            body: [{ url: 'some url', require: true }],
        },
        {
            route: 'GET /tokenizer/tokenize-me/?obj=1',
            route: `GET http://localhost:${PORT}/tokenizer/tokenize-me/?obj=1`,
            description:
                'return text retrieved off the url target provided in the request body tokenized as object',
            queryString: [{ obj: '1', require: false }],
            body: [{ url: 'some url', require: true }],
        },
    ]);
});

app.use('/tokenizer', tokenizerRouter);

app.listen(PORT, async () => {
    console.log(`✌ server is running on port ${PORT} ✌`);
});
