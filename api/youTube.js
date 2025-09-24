// api/youtube.js
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
    platform: 'YouTube',
    input: url,
    title: 'Demo YouTube Video',
    download_url: 'https://cdn.thugtechies.com/demo/youtube.mp4',
    formats: [
      { itag: 18, quality: '360p', url: 'https://cdn.thugtechies.com/demo/youtube-360.mp4' },
      { itag: 22, quality: '720p', url: 'https://cdn.thugtechies.com/demo/youtube-720.mp4' }
    ]
  };

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(response));
};