<template>
  <div class="dashboard">

    <h1>ApexPulse Dashboard</h1>

    <p v-if="loading">
      Loading dashboard...
    </p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <div v-else-if="summary">

      <h2>Summary</h2>

      <p>Total Revenue: {{ summary.total_revenue }}</p>

      <p>Active Users: {{ summary.active_users }}</p>

      <p>System Uptime: {{ summary.system_uptime_pct }}%</p>

      <p>Critical Alerts: {{ summary.critical_alerts }}</p>

    </div>

  </div>
</template>

<script setup>
import { useSummary } from "../composables/useSummary";

const {
    summary,
    loading,
    error,
} = useSummary();
</script>