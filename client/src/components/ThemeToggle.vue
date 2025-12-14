<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-vue-next'

const { t } = useI18n()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button
    data-testid="theme-toggle-button"
    size="icon"
    :aria-label="t('components.theme-toggle.toggleTheme')"
    @click="toggleDark()"
    class="shrink-0 bg-white dark:bg-slate-900"
  >
    <Sun v-if="!isDark" :size="20" />
    <Moon v-else :size="20" />
  </Button>
</template>
