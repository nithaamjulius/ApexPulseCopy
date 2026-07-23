<template>
  <section>

    <h2>Summary</h2>

    <p>Total Revenue: {{ summary.total_revenue }}</p>

    <p>Active Users: {{ summary.active_users }}</p>

    <p>System Uptime: {{ summary.system_uptime_pct }}%</p>

    <p>Critical Alerts: {{ summary.critical_alerts }}</p>

  </section>
</template>

<script setup>
defineProps({
    summary: {
        type: Object,
        required: true,
    },
});
</script>