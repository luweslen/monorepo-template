import type { IHealthStatusResponse } from "@/@types/api/health.interface"

export const HealthApi = {
  getStatus: async () => {
    const startTime = performance.now()
    const response = await fetch('http://localhost:3001/health/status')
    const endTime = performance.now()

    return {
      ...await response.json() as IHealthStatusResponse,
      responseTime: Math.round(endTime - startTime),
      lastCheck: new Date().toLocaleTimeString()
    }
  }
}
