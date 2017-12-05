get-random-wiki-topic
==================

Gets a random Wikipedia topic.

Installation
------------

    npm install get-random-wiki-topic

Usage
-----

    var getRandomArticle = require('get-random-wiki-topic');
    var opts = {
      language: 'en'
    };
    getRandomArticle(opts, logArticle);

    function logTopic(error, topic) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(topic)
      }
    }

Output:

    Empress Michiko

If you want to use a Wikipedia that is not on wikipedia.org, you need to specify `wikipediaProtocol` and `wikipediaDomain` params in the opts. e.g.:

    {
      wikipediaProtocol: 'http',
      wikipediaDomain: 'bulbapedia.bulbagarden.net'
    }

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2017 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
