<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-vue-next'

const { t, locale } = useI18n()

const languages = [
  { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
  { code: 'en-US', name: 'English', flag: '🇺🇸' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
]

const changeLanguage = (langCode: string) => {
  locale.value = langCode
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        data-testid="language-selector-button"
        size="icon"
        :aria-label="t('components.language-selector.selectLanguage')"
        class="bg-white dark:bg-slate-900"
      >
        <Languages :size="20" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" data-testid="language-selector-menu">
      <DropdownMenuItem
        v-for="lang in languages"
        :key="lang.code"
        :data-testid="`language-option-${lang.code}`"
        @click="changeLanguage(lang.code)"
        class="bg-white dark:bg-slate-900 cursor-pointer"
      >
        <span class="mr-2 text-xl">{{ lang.flag }}</span>
        <span>{{ lang.name }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
