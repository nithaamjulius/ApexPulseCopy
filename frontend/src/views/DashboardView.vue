<template>
  <div class="dashboard">
    <h1>ApexPulse Dashboard</h1>

    <p v-if="loading">Loading dashboard...</p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <template v-else>
      <DashboardSummary v-if="summary" :summary="summary" />

      <DashboardServers v-if="servers" :servers="servers" />

      <DashboardLogs v-if="logs" :logs="logs" />
    </template>
  </div>
</template>

<script setup>
import { useDashboard } from "../composables/useDashboard";

import DashboardSummary from "../components/DashboardSummary.vue";
import DashboardServers from "../components/DashboardServers.vue";
import DashboardLogs from "../components/DashboardLogs.vue";

const { summary, servers, logs, loading, error } = useDashboard();
</script>
