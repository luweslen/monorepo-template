import { I18nUtils } from '@/utils/i18n.util';

const modules = import.meta.glob('./**/*.json', { eager: true });
const mappedTranslations = I18nUtils.mapModulesToStructuredObject(modules);

export default mappedTranslations;
