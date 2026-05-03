const raw = process.env.BASE_PATH || "";
const trimmed = raw.replace(/^\/+|\/+$/g, "");
const baseHref = trimmed ? `/${trimmed}/` : "/";
const siteUrl = (process.env.SITE_URL || "https://www.windhamlabs.com").replace(
  /\/+$/,
  "",
);

module.exports = {
  siteUrl,
  baseHref,
};
