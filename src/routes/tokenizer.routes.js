import { Router } from 'express';
import axios from 'axios';

import { tokenizer, decideWhatToken, fetch } from '../tokenizer';

const tokenizerRouter = Router();

tokenizerRouter.get('/tokenize-bible', async (req, res) => {
    const bible = await fetch('http://www.gutenberg.org/cache/epub/10/pg10.txt');

    const tokenized = tokenizer(bible, {
        tokenizerType: decideWhatToken(req.query),
    });

    res.send(tokenized);
});

tokenizerRouter.post('/tokenize-me/', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        res.send({ error: '[ERROR]: The url must be provided in the body of the request' });
        return;
    }

    try {
        const given = (await axios(url)).data;
        const tokenized = tokenizer(given, {
            tokenizerType: decideWhatToken(req.query),
        });

        res.send(tokenized);
    } catch (error) {
        res.send({
            error:
                '[ERROR]: The url you gave has no text in it, please check it returns a txt file',
        });
    }
});

export { tokenizerRouter };
