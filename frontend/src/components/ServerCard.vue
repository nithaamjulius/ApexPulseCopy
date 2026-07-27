<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  servers: {
    type: Array,
    required: true,
  },
});

const selectedFilter = ref("all");

const filteredServers = computed(() => {
  if (selectedFilter.value === "all") {
    return props.servers;
  }

  return props.servers.filter(
    (server) => server.status === selectedFilter.value,
  );
});
</script>

<template>
  <section>
    <div class="section-heading">SERVER FLEET STATUS - SERVERCARD</div>

    <div class="filters">
      <div class="filters">
        <button
          type="button"
          class="filter"
          :class="{ active: selectedFilter === 'all' }"
          @click="selectedFilter = 'all'"
        >
          ALL
        </button>

        <button
          type="button"
          class="filter"
          :class="{ active: selectedFilter === 'healthy' }"
          @click="selectedFilter = 'healthy'"
        >
          HEALTHY
        </button>

        <button
          type="button"
          class="filter"
          :class="{ active: selectedFilter === 'warning' }"
          @click="selectedFilter = 'warning'"
        >
          WARNING
        </button>

        <button
          type="button"
          class="filter"
          :class="{ active: selectedFilter === 'critical' }"
          @click="selectedFilter = 'critical'"
        >
          CRITICAL
        </button>
      </div>
    </div>
    <p>Current filter: {{ selectedFilter }}</p>

    <div class="servers">
      <div class="server" v-for="server in filteredServers" :key="server.id">
        <div class="heading">
          <b>{{ server.name }}</b>

          <div class="status" :class="server.status">
            {{ server.status }}
          </div>
        </div>

        <div>CPU Load</div>

        <div class="bar">
          <div class="fill" :style="{ width: server.cpu_load_pct + '%' }"></div>
        </div>

        <div class="metric">
          <span>CPU</span>
          <span>{{ server.cpu_load_pct }}%</span>
        </div>

        <div class="metric">
          <span>Memory</span>
          <span>{{ server.memory_usage_gb }} GB</span>
        </div>

        <div class="metric">
          <span>Region</span>
          <span>{{ server.region }}</span>
        </div>

        <div class="metric">
          <span>IP</span>
          <span>{{ server.ip_address }}</span>
        </div>
      </div>
      <div class="add">+ ADD SERVER</div>
    </div>
  </section>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filter {
  border: 1px solid lightgray;
  padding: 6px 15px;
  font-size: 12px;
  cursor: pointer;
}

.active {
  background: #222;
  color: white;
}

.servers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.server {
  border: 1px solid lightgray;
  padding: 15px;
}

.heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.status {
  padding: 3px 10px;
  font-size: 11px;
}

.bar {
  height: 10px;
  margin: 10px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: #444;
}

.metric {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  font-size: 13px;
}

.add {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed lightgray;
  min-height: 210px;
  color: gray;
}

.status.healthy {
  background: #2e7d32;
  color: white;
}

.status.warning {
  background: #f9a825;
  color: white;
}

.status.critical {
  background: #c62828;
  color: white;
}
section{
    margin-bottom:40px;
}

.stats{
    margin-top:25px;
}

.card{
    border-radius:8px;
}
</style>
