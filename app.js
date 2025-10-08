import express from "express";
const app = express();

// ✅ Redirect route
app.get("/redirect", (req, res) => {
  const { to } = req.query;

  if (!to) {
    return res.status(400).send("❌ Missing ?to= parameter");
  }

  // Sirf safe links (http/https)
  if (!/^https?:\/\//.test(to)) {
    return res.status(400).send("❌ Invalid URL (must start with http/https)");
  }

  console.log(`➡️ Redirecting to: ${to}`);
  res.redirect(302, to);
});

// ✅ Root route (info)
app.get("/", (req, res) => {
  res.send("✅ Redirect API Active — Use /redirect?to=https://example.com");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
});
