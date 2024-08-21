const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Gimran Abdullin",
    image: "/notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "human",
    bio: "Welcome to my blog!",
    email: "abdullin.gimran@gmail.com",
    linkedin: "",
    github: "bshkrt",
    instagram: "",
  },
  projects: [
    {
      name: `LI2 Contests`,
      href: "https://codeforces.com/group/jtU6D2hVEi/blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Updates & Thoughts",
    description: "Welcome to my blog!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://gimran.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ru-RU", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}
//

module.exports = { CONFIG }
