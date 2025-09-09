const express = require("express");
const { URL } = require("url");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3006;

const urlMap = new Map();

app.use(express.json());

const generateUniqueId = () => {
  return crypto.randomBytes(3).toString("hex");
};

const validateUrl = (candidateUrl) => {
  try {
    new URL(candidateUrl);
    return true;
  } catch (error) {
    return false;
  }
};

app.post("/api/shorten", (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl || !validateUrl(originalUrl)) {
    return res
      .status(400)
      .json({ status: "error", message: "The provided URL is invalid." });
  }

  let existingShortId;
  for (const [id, url] of urlMap.entries()) {
    if (url === originalUrl) {
      existingShortId = id;
      break;
    }
  }

  if (existingShortId) {
    const shortUrl = `${req.protocol}://${req.get("host")}/${existingShortId}`;
    return res.status(200).json({ status: "success", shortUrl, originalUrl });
  }

  const newId = generateUniqueId();
  urlMap.set(newId, originalUrl);

  const newShortUrl = `${req.protocol}://${req.get("host")}/${newId}`;
  res
    .status(201)
    .json({ status: "success", shortUrl: newShortUrl, originalUrl });
});

app.get("/:shortId", (req, res) => {
  const { shortId } = req.params;

  const originalUrl = urlMap.get(shortId);

  if (originalUrl) {
    res.redirect(301, originalUrl);
  } else {
    res.status(404).send("Error: The requested URL was not found.");
  }
});

app.get("/", (req, res) => {
  res.status(200).send("URL Shortener service is operational.");
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
