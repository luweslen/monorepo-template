<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const { t } = useI18n()
</script>

<template>
  <header class="flex items-center justify-between mb-8">
    <div class="text-center flex-1 space-y-2">
      <h1 class="text-2xl font-medium text-slate-900 dark:text-slate-100">
        {{ t('pages.status.title') }}
      </h1>
      <p class="text-slate-600 dark:text-slate-400">
        {{ t('pages.status.subtitle') }}
      </p>
    </div>

    <div class="flex items-center gap-2 shrink-0">
      <LanguageSelector />
      <ThemeToggle />
    </div>
  </header>
</template>
