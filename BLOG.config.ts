const BLOG = {
  title: "hamesh",
  ArTitle: "هامش",
  author: "Abderrahim",
  email: "abderrahimaneddam1@gmail.com",
  link: "https://hamesh.vercel.app",
  newsletter: "Notionic Weekly",
  description: "هامش هي مدونة شخصية تهدف الى تقديم اغناء المحتوى العربي ",
  lang: "ar-EG", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: "Asia/Shanghai", // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: "auto", // ['light', 'dark', 'auto'],
  font: "sans-serif", // ['sans-serif', 'serif']
  lightBackground: "#F6F8FA", // use hex value, don't forget '#' e.g #fffefc
  darkBackground: "#212936", // use hex value, don't forget '#'
  path: "", // leave this empty unless you want to deploy Notionic in a folder
  since: 2023, // If leave this empty, current year will be used.
  postsPerPage: 15,
  sortByDate: true,
  pagesShow: {
    newsletter: true,
    notes: true,
    projects: true,
    contact: true,
    books: true,
    friends: true,
  },
  showWeChatPay: true,
  previewImagesEnabled: true,
  autoCollapsedNavBar: true, // The automatically collapsed navigation bar
  pagesIcon: "/logo.svg",
  urlCover: "regular", // the quality of the auto generated image ( raw > full > regular > "")
  ogImageGenerateHost: "og-zl.vercel.app", // The link to generate OG image, don't end with a slash
  unsplashApiKey: process.env.UNSPLASH_API, // The link to generate OG image, don't end with a slash
  defaultCover: "/cover.jpg",
  socialLink: {
    twitter: "https://twitter.com/iabderrahim",
    github: "https://github.com/iabderrahim",
    instagram: "https://instagram.com/iabderrahim",
  },
  seo: {
    keywords: [
      "hamesh",
      "مدونة عربية",
      "Abderrahim aneddam",
      "hamesh Blog",
      "مدونة هامش",
    ],
    googleSiteVerification: "5EySfeUGoEZeYFK_SsE2qJD_ZcX4S9e_YmkrEtpZKZs", // Remove the value or replace it with your own google site verification code
  },
  analytics: {
    provider: "", // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: "", // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: "", // e.g https://ackee.example.com , don't end with a slash
      domainId: "", // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: "https://static.cloudflareinsights.com/beacon.min.js", // Default
      token: "", // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: "", // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: "", // The url of your Umami script
      websiteId: "", // The website id of your Umami instance
    },
  },
  comment: {
    // support provider: utterances, supacomments
    provider: "", // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: "", // The url of your Supabase instance
      supabaseAnonKey: "", // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};

export default BLOG;
