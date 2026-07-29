<script setup>
defineProps({
  summary: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <header>
    <div class="small">OPERATIONS OVERVIEW</div>

    <h1>FLEET MANAGEMENT DASHBOARD</h1>

    <div class="small">
      Last Updated • 2024-07-20 10:28 UTC • 5 Servers Monitored • Auto Refresh
      OFF
    </div>
  </header>

  <section>
    <div class="section-heading">EXECUTIVE KPI SUMMARY</div>

    <div class="stats">
      <div class="card">
        <h4>Total Revenue</h4>
        <h2>
          R{{
            Number(summary.total_revenue).toLocaleString("en-ZA", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }}
        </h2>
        <p>Trend Placeholder</p>
      </div>

      <div class="card">
        <h4>Active Users</h4>
        <h2>{{ summary.active_users }}</h2>
        <p>Trend Placeholder</p>
      </div>

      <div class="card">
        <h4>System Uptime</h4>
        <h2>{{ summary.system_uptime_pct }}%</h2>
        <p>Trend Placeholder</p>
      </div>

      <div class="card">
        <h4>Critical Alerts</h4>
        <h2>{{ summary.critical_alerts }}</h2>
        <p>Trend Placeholder</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
header {
  padding: 25px;
  border-bottom: 1px solid lightgray;
}

h1 {
  margin: 10px;
  font-size: 34px;
}

.small {
  color: gray;
  font-size: 13px;
}

section {
  padding: 20px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.card {
  border: 1px solid gray;
  padding: 18px;
}

h4 {
  color: gray;
}

h2 {
  font-size: 42px;
  margin-bottom: 10px;
  word-break: break-word;
}

p {
  color: gray;
  font-size: 12px;
}

@media (max-width: 768px) {

  header {
    padding: 20px 15px;
    text-align: center;
  }

  h1 {
    margin: 10px 0;
    font-size: 28px;
  }

  .small {
    font-size: 12px;
    line-height: 1.5;
  }

  section {
    padding: 15px;
  }

  .section-heading {
    text-align: center;
    margin-bottom: 20px;
  }

  .card {
    padding: 20px;
  }

  h2 {
    font-size: 32px;
  }

}
</style>
