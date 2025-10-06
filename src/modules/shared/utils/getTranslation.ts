import en from '../../../content/en.json';
import uk from '../../../content/uk.json';

const translations = {
  en,
  uk,
};

export const getTranslation = (language: 'en' | 'uk' = 'en') => {
  return translations[language] || translations.en;
};
