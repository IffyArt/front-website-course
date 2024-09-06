/** @type {import('next-translate').I18nConfig} */
const nextTranslateConfig = {
  locales: ['zh', 'en', 'fr'],
  defaultLocale: 'zh',
  logBuild: false,
  logger: ({ namespace, i18nKey }) =>
    console.warn(`[next-translate]: ${namespace}:${i18nKey} is missing`),

  pages: {
    '*': ['common', 'components/navbar'],
    '/': ['home'],
  },
};

module.exports = nextTranslateConfig;
