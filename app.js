const express = require('express');
const app = express();

// 👇 Yahan apni link add karo:
const targetLink = 'YOUR_LINK_HERE';

app.get('/', (req, res) => {
  res.redirect(targetLink);
});

app.listen(3000, () => console.log('✅ Redirect server running on port 3000'));
