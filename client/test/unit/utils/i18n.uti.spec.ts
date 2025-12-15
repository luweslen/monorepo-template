import { i18nModulesMock } from '../../support/mocks/i18n-modules.mock';
import { describe, expect, it } from 'vitest';
import { I18nUtils } from '@/utils/i18n.util';

describe('Unit :: Utils :: I18nUtils', () => {
  describe('mapModulesToStructuredObject', () => {
    it('Should map modules into a structured object for i18n usage', () => {
      const result = I18nUtils.mapModulesToStructuredObject(i18nModulesMock);

      expect(result).toBeDefined();
      expect(Object.keys(result)).toEqual(['components', 'pages']);

      expect(result.components).toStrictEqual({
        'language-selector': {
          selectLanguage: 'Select language',
        },
        'theme-toggle': {
          toggleTheme: 'Toggle theme',
        },
      });

      expect(result.pages).toStrictEqual({
        status: {
          title: 'API Status',
          subtitle: 'Real-time monitoring',
          infos: {
            description: 'Main API Information',
            title: 'General Status',
            version: 'Version',
            responseTime: 'Response Time',
            lastCheck: 'Last Check',
          },
        },
      });
    });
  });
});
