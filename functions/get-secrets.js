const secrets = require('./data/secrets.json');

exports.handler = async() => {
  return {
    statusCode: 200,
    body: JSON.stringify(secrets),
  }
}