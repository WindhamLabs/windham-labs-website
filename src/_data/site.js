const siteUrl = (process.env.SITE_URL || "https://www.windhamlabs.com").replace(
  /\/+$/,
  "",
);

module.exports = {
  siteUrl,
};
