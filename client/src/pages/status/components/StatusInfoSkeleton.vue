<script setup lang="ts">
import { Card, CardContent, CardHeader } from '@/components/ui/card'
</script>

<template>
  <Card class="bg-white dark:bg-slate-900">
    <CardHeader>
      <div class="h-6 w-48 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
      <div class="h-4 w-64 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mt-2" />
    </CardHeader>
    <CardContent>
      <div class="flex items-center justify-between">
        <div
          class="flex flex-col space-y-2"
          v-for="i in 3"
          :key="i"
        >
          <div class="flex items-center justify-center space-x-2">
            <div class="h-4 w-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
            <div class="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
          </div>
          <div class="h-5 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        </div>
      </div>
    </CardContent>
  </Card>
</template>
