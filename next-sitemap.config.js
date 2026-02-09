const TestnumbersCount = require("./utils/testnumbersCount");

function generateUrls(testData) {
  const urls = [];

  for (const category in testData) {
    // Add the base category URL (e.g. "html", "css")
    urls.push(category);

    for (const level in testData[category]) {
      // Add the level URL (e.g. "html/beginner", "css/intermediate")
      urls.push(`${category}/${level}`);

      // Add the test URLs (e.g. "html/beginner/test1")
      testData[category][level].forEach((test) => {
        urls.push(`${category}/${level}/${test.value}`);
      });
    }
  }

  return urls;
}

module.exports = {
  siteUrl: "https://www.quizinterview.com", // Replace with your website URL
  generateRobotsTxt: true, // (Optional) Generate a robots.txt file
  changefreq: "daily", // Frequency of changes for pages
  priority: 0.7, // Priority of the pages
  sitemapSize: 7000, // Max number of URLs per sitemap file
  generateIndexSitemap: true, // Whether to create index sitemap
  additionalPaths: async (config) => {
    // Simulating fetching blog post slugs from an API or database
    const pages = generateUrls(TestnumbersCount);

    return pages.map((page) => ({
      loc: `/test/${page}`, // Dynamic blog post URL
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));
  },
};
