// api/instagram.js
const { parse } = require('url');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const parsed = parse(req.url, true);
  const url = (req.query && req.query.url) || parsed.query.url;

  if (!url) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ success: false, message: 'Missing ?url' }));
  }

  const response = {
    success: true,
    platform: 'Instagram',
    input: url,
    download_url: 'https://cdn.thugtechies.com/demo/instagram.mp4',
    type: 'video' // or 'image'
  };

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(response));
};