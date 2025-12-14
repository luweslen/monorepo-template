<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Clock, Server } from 'lucide-vue-next'

interface IProps {
  version: string
  responseTime: number
  lastCheck: string
}

const props = defineProps<IProps>()
const { t } = useI18n()

const infos = computed(() => [
  { icon: Code, label: t('pages.status.infos.version'), value: props.version },
  { icon: Clock, label: t('pages.status.infos.responseTime'), value: `${props.responseTime} ms` },
  { icon: Server, label: t('pages.status.infos.lastCheck'), value: props.lastCheck },
])
</script>

<template>
  <Card class="bg-white dark:bg-slate-900">
    <CardHeader>
      <CardTitle>{{ t('pages.status.infos.title') }}</CardTitle>
      <CardDescription class="text-slate-500 dark:text-slate-300">
        {{ t('pages.status.infos.description') }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div
          class="flex flex-col space-y-2"
          v-for="value in infos"
          :key="value.label"
        >
          <div class="flex items-center justify-start md:justify-center space-x-2 text-slate-500 dark:text-slate-300">
            <component :is="value.icon" :size="16" />
            <span class="text-sm text-muted-foreground">
              {{ value.label }}
            </span>
          </div>
          <span class="font-medium">{{ value.value }}</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
