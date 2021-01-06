// JavaScript Document
const fs = require('fs');
const url = require('url');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
const urlParams = url.parse('http://USrJQ9WDnbjt5oJQmiaZywX1:aecdd89b-692a-4668-96f6-62a7f1323f9b@tntenvjkfhy.SANDBOX.verygoodproxy.com:8080');
const agent = new HttpsProxyAgent({
  ...urlParams,
  ca: [fs.readFileSync('path/to/sandbox.pem')],
});
async function getData() {
  let result;
  try {
    result = await fetch('https://echo.apps.verygood.systems/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        account_number: 'ALIAS',
      }),
      agent,
    });
  } catch (e) {
    console.error(e);
  }
  return await result.text();
}
getData().then(response => console.log(response));