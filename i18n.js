// i18n.js
module.exports = {
  locales: ['en', 'zh', 'fr'], // 支援的語言，例如英文、中文和法文
  defaultLocale: 'zh', // 預設語言
  pages: {
    '*': ['common'], // 所有頁面都會使用 common.json 進行翻譯
    '/posts/[id]': ['posts'], // posts/[id].js 會使用 post
  },
};
