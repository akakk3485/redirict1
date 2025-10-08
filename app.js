import express from "express";
const app = express();

app.get("/redirect", (req, res) => {
  const { to } = req.query;
  if (!to) {
    return res.status(400).send("❌ Missing ?to= parameter");
  }

  if (!/^https?:\/\//.test(to)) {
    return res.status(400).send("❌ Invalid URL (must start with http/https)");
  }

  console.log("➡️ Redirecting to:", to);
  res.redirect(302, to);
});

app.get("/", (req, res) => {
  res.send("✅ Redirect API Active — Use /redirect?to=https://example.com");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Running on port ${process.env.PORT || 3000}`);
});
