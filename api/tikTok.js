// api/tiktok.js
const { parse } = require('url');

module.exports = (req, res) => {
  // --- CORS (allow your frontend to call this)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  // Robust query parsing (works in Vercel serverless)
  const parsed = parse(req.url, true);
  const url = (req.query && req.query.url) || parsed.query.url;

  if (!url) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
      success: false,
      message: 'Missing required query parameter: ?url='
    }));
  }

  // ----
  // NOTE: This is a demo/fake response. Replace with your real extraction logic or third-party service.
  // ----
  const response = {
    success: true,
    platform: 'TikTok',
    input: url,
    title: 'Demo TikTok Video',
    author: 'demo_user',
    download_url: 'https://cdn.thugtechies.com/demo/tiktok.mp4',
    thumbnail: 'https://cdn.thugtechies.com/demo/tiktok-thumb.jpg'
  };

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(response));
};