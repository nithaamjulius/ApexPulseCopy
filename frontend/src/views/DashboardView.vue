<template>
  <DashboardLayout>
    <p v-if="loading">Loading dashboard...</p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <template v-else>
      <DashboardSummary v-if="summary" :summary="summary" />

      <DashboardServers v-if="servers" :servers="servers" />

      <DashboardLogs v-if="logs" :logs="logs" />
    </template>
  </DashboardLayout>
</template>

<script setup>
import { useDashboard } from "../composables/useDashboard";

import DashboardLayout from "../layouts/DashboardLayout.vue";
import DashboardSummary from "../components/DashboardSummary.vue";
import DashboardServers from "../components/DashboardServers.vue";
import DashboardLogs from "../components/DashboardLogs.vue";

const { summary, servers, logs, loading, error } = useDashboard();
</script>
