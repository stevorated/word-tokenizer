# Word Repetitions Tokenizer

simple express api which converts words from a url serving a txt file into tokens.

## Setup

```javascript

yarn

```

## start the server with nodemon(dev)

```javascript

  yarn dev

```

## start the server

```javascript

  yarn start

```

## run tests

```javascript
  // with coverage
  yarn test

```

## run unit tests

```javascript
  // with coverage
  yarn test:unit

  // without coverage
  yarn test unit

```

## run integration tests

```javascript
  // with coverage
  yarn test:integration

  // without coverage
  yarn test integration

```

## run e2e tests

```javascript
  // with coverage
  yarn test:e2e

  // without coverage
  yarn test e2e

```

## Endpoints

? = optional

| name                                 | body  | query | description                                  |
| :----------------------------------- | :---- | :---- | :------------------------------------------- |
| GET /                                |       |       | API end points                               |
| GET /tokenizer/tokenize-bible        |       | obj?  | return King James’ Bible tokenized as array  |
| GET /tokenizer/tokenize-bible/?obj=1 |       | obj?  | return King James’ Bible tokenized as object |
| GET /tokenizer/tokenize-me           | url   | obj?  | return custom link tokenized as array        |
| GET /tokenizer/tokenize-me/?obj=1    | url   | obj?  | return custom link tokenized as object       |

## License

Copyright © 2020 <stevorated (Shirel Garber)>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
