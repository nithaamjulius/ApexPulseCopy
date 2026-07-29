<template>
  <DashboardLayout>
    <div v-if="loading" class="status-card loading-card">
      <h2>🔄 Starting ApexPulse...</h2>

      <p>Connecting to the backend and loading your dashboard.</p>

      <p class="status-note">
        If this is the first visit after a period of inactivity, the backend may
        take up to a minute to wake up.
      </p>
    </div>

    <div v-else-if="error" class="status-card error-card">
      <h2>⚠️ Unable to connect</h2>

      <p>We couldn't retrieve the dashboard data.</p>

      <p class="status-note">
        Please refresh the page in a few moments. The backend may still be
        starting.
      </p>
    </div>

    <template v-else>
      <DashboardSummary v-if="summary" :summary="summary" />

      <DashboardServers v-if="servers" :servers="servers" />

      <DashboardLogs v-if="logs" :logs="logs" />
    </template>
  </DashboardLayout>
</template>

<script setup>
import { useDashboard } from "../composables/useDashboard";

import Nav from "../components/nav.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import DashboardSummary from "../components/DashboardSummary.vue";
import DashboardServers from "../components/DashboardServers.vue";
import DashboardLogs from "../components/DashboardLogs.vue";

const { summary, servers, logs, loading, error } = useDashboard();
</script>

<style scoped>

.status-card{
    max-width:650px;
    margin:80px auto;
    padding:30px;
    text-align:center;
    border-radius:12px;
    box-shadow:0 8px 25px rgba(0,0,0,.08);
}

.loading-card{
    background:#eef6ff;
    border:1px solid #cfe2ff;
}

.error-card{
    background:#fff4f4;
    border:1px solid #f5bcbc;
}

.status-card h2{
    margin-bottom:15px;
}

.status-card p{
    margin-top:10px;
    line-height:1.6;
}

.status-note{
    color:#666;
    font-size:14px;
}

@media(max-width:768px){

.status-card{
    margin:40px 15px;
    padding:20px;
}

.status-card h2{
    font-size:24px;
}

}

</style>
