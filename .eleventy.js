/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

module.exports = function (eleventyConfig) {
  const raw = process.env.BASE_PATH || "";
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  const pathPrefix = trimmed ? `/${trimmed}/` : "/";

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    pathPrefix,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
