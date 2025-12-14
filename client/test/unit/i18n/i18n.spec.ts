import { setActivePinia, createPinia } from 'pinia';
import {
  beforeEach, describe, expect, it,
} from 'vitest';
import { ObjectUtils } from '../../support/utils/object.util';
import { differenceWith } from 'lodash';
import ptBR from '@/i18n/pt-BR';
import enUS from '@/i18n/en-US';

describe('i18n', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should be translate pt-BR and en-US', () => {
    const ptBRKeys = ObjectUtils.getAllKeys(ptBR);
    const enUSKeys = ObjectUtils.getAllKeys(enUS);
    const esESKeys = ObjectUtils.getAllKeys(enUS);

    expect(differenceWith(enUSKeys, ptBRKeys)).toEqual([]);
    expect(differenceWith(ptBRKeys, enUSKeys)).toEqual([]);
    expect(differenceWith(esESKeys, ptBRKeys)).toEqual([]);
    expect(differenceWith(ptBRKeys, esESKeys)).toEqual([]);
  });
});
