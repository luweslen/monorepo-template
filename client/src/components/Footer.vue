<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ExternalLink } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <footer class="mt-auto py-6 border-t border-slate-200 dark:border-slate-800">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
        <p class="flex items-center gap-2">
          {{ t('components.footer.madeBy') }}
          <a
            href="https://github.com/luweslen"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 font-medium text-slate-900 dark:text-slate-100 hover:underline transition-colors"
          >
            luweslen
            <ExternalLink :size="14" />
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
