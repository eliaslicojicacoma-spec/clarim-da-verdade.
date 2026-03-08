export const i18nConfig = {
  defaultLocale: 'pt',
  locales: ['pt', 'en'],
  localePrefix: 'always',
};

export type Locale = (typeof i18nConfig)['locales'][number];
