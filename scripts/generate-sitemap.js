import { writeFile } from "fs/promises";
import { SitemapStream, streamToPromise } from "sitemap";

const sitemap = new SitemapStream({ hostname: "https://www.sunceadtech.com" });

sitemap.write({ url: "/", changefreq: "weekly", priority: 1 });
sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/services", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.5 });
sitemap.write({ url: "/portfolio", changefreq: "monthly", priority: 0.5 });

sitemap.end();

streamToPromise(sitemap).then((data) => {
  return writeFile("public/sitemap.xml", data.toString());
}).then(() => {
  console.log("✅ Sitemap generated!");
}).catch(console.error);