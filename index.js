var request = require('request');

function getRandomWikiTopic(opts, done) {
  // var topics = jsonfile.readFileSync(__dirname + '/data/topics.json');
  var language;
  var wikipediaDomain;
  var wikipediaProtocol;

  if (opts) {
    language = opts.language;
    wikipediaDomain = opts.wikipediaDomain;
    wikipediaProtocol = opts.wikipediaProtocol;
  }

  if (!language) {
    language = 'en';
  }

  var randomURL;

  if (wikipediaDomain && wikipediaProtocol) {
    randomURL =
      wikipediaProtocol + '://' + wikipediaDomain + '/wiki/Special:Random';
  } else if (language) {
    randomURL = 'https://' + language + '.wikipedia.org/wiki/Special:Random';
  }

  var requestOpts = {
    url: randomURL,
    followRedirects: false
  };
  request(requestOpts, parseResponse);

  function parseResponse(error, response) {
    if (error) {
      done(error);
    } else {
      var randomTopic = getLast(decodeURI(response.req.path)).replace('_', ' ');
      done(null, randomTopic);
    }
  }
}

function getLast(path) {
  var parts = path.split('/');
  if (parts.length > 0) {
    return parts[parts.length - 1];
  }
}

module.exports = getRandomWikiTopic;
