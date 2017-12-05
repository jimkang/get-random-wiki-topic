var test = require('tape');
var getRandomArticle = require('../../index');

var testCases = [
  {
    opts: {
      language: 'simple'
    }
  },
  {
    opts: {
      language: 'en'
    }
  },
  {
    opts: {
      wikipediaProtocol: 'http',
      wikipediaDomain: 'bulbapedia.bulbagarden.net'
    }
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Basic functional test', function basicTest(t) {
    getRandomArticle(testCase.opts, checkResult);

    function checkResult(error, topic) {
      t.ok(!error, 'No error while getting topic.');
      t.ok(topic.length > 0, 'Topic is longer than 0.');
      t.equal(topic.indexOf('\n'), -1, 'Topic has no linebreaks.');
      console.log(topic);
      t.end();
    }
  });
}
