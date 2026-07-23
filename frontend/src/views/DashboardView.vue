<template>
  <div class="dashboard">
    <h1>ApexPulse Dashboard</h1>

    <p v-if="loading">Loading dashboard...</p>

    <p v-else-if="error">
      {{ error }}
    </p>

    <div v-else-if="summary">
      <h2>Summary</h2>

      <p>Total Revenue: {{ summary.total_revenue }}</p>

      <p>Active Users: {{ summary.active_users }}</p>

      <p>System Uptime: {{ summary.system_uptime_pct }}%</p>

      <p>Critical Alerts: {{ summary.critical_alerts }}</p>

      <h2>Servers</h2>

      <ul v-if="servers">
        <li v-for="server in servers" :key="server.server_id">
          {{ server.server_name }} - {{ server.status }}
        </li>
      </ul>

      <h2>System Logs</h2>

      <ul v-if="logs">
        <li v-for="log in logs" :key="log.id">
          {{ log.timestamp }} - {{ log.level }} -
          {{ log.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useSummary } from "../composables/useSummary";

const { summary, loading, error } = useSummary();

import { useSummary } from "../composables/useSummary";
import { useServers } from "../composables/useServers";
import { useLogs } from "../composables/useLogs";

const { summary, loading, error } = useSummary();

const { servers } = useServers();

const { logs } = useLogs();
</script>
