const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Redis client connecting to host "redis" on default port 6379
const client = redis.createClient({ url: 'redis://redis:6379' });

client.connect().catch(console.error);

app.get('/hit', (req, res) => {
  res.send('Hello from the custom app container!');
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
