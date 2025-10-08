const express = require('express');
const app = express();

// 👇 Yahan apni link add karo:
const targetLink = 'https://assuagequit.com/jypccuvfu?key=43447dfd110af3f34cd1463209230c0f';

app.get('/', (req, res) => {
  res.redirect(targetLink);
});

app.listen(3000, () => console.log('✅ Redirect server running on port 3000'));
