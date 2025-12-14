<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { HealthApi } from '@/api/health.api'
import StatusHeader from './components/StatusHeader.vue'
import StatusInfo from './components/StatusInfo.vue'
import StatusInfoSkeleton from './components/StatusInfoSkeleton.vue'

const status = ref({
  version: '',
  responseTime: 0,
  lastCheck: '',
})

const isLoading = ref(true)

const fetchApiStatus = async () => {
  try {
    isLoading.value = true

    status.value = await HealthApi.getStatus()
  } catch (error) {
    console.error('Error fetching API status:', error)
    status.value = {
      version: 'N/A',
      responseTime: 0,
      lastCheck: new Date().toLocaleTimeString(),
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchApiStatus()
  // Atualizar a cada 30 segundos
  setInterval(fetchApiStatus, 30000)
})
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto space-y-6">
      <status-header />

      <status-info-skeleton v-if="isLoading" />
      <status-info
        v-else
        :version="status.version"
        :response-time="status.responseTime"
        :last-check="status.lastCheck"
      />
    </div>
  </div>
</template>
