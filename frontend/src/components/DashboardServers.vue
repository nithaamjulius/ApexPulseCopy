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
    <div class="section-heading">SERVER FLEET STATUS</div>

    <div class="filters">
      <button
        class="filter"
        :class="{ active: selectedFilter === 'all' }"
        @click="selectedFilter = 'all'"
      >
        ALL
      </button>

      <button
        class="filter"
        :class="{ active: selectedFilter === 'healthy' }"
        @click="selectedFilter = 'healthy'"
      >
        HEALTHY
      </button>

      <button
        class="filter"
        :class="{ active: selectedFilter === 'warning' }"
        @click="selectedFilter = 'warning'"
      >
        WARNING
      </button>

      <button
        class="filter"
        :class="{ active: selectedFilter === 'critical' }"
        @click="selectedFilter = 'critical'"
      >
        CRITICAL
      </button>
    </div>
    <p>Selected Filter: {{ selectedFilter }}</p>
    <p>Showing {{ filteredServers.length }} of {{ servers.length }} servers</p>
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
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.filter {
  border: 1px solid lightgray;
  background: white;
  padding: 6px 15px;
  cursor: pointer;
  transition: 0.25s;
}

.filter:hover {
  background: #444;
  color: white;
}

.active {
  background: #222;
  color: white;
}

.servers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.server {
  border: 1px solid lightgray;
  padding: 15px;
  transition: 0.25s;
}

.server:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.status {
  padding: 3px 10px;
  border-radius: 3px;
  color: white;
  text-transform: capitalize;
}

.status.healthy {
  background: #2e7d32;
}

.status.warning {
  background: #f9a825;
}

.status.critical {
  background: #c62828;
}

.bar {
  height: 10px;
  background: #ddd;
  margin: 10px 0;
}

.fill {
  height: 100%;
  background: #444;
}

.metric {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 13px;
}

.metric span:last-child {
  word-break: break-word;
}
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed lightgray;
  min-height: 210px;
  color: gray;
}
section{
    margin-bottom:40px;
}

.section-heading{
    font-size:24px;
    font-weight:bold;
    margin-bottom:20px;
}

.filters{
    margin-bottom:25px;
}

@media (max-width: 768px) {

  .section-heading {
    font-size: 20px;
    text-align: center;
  }

  .filter {
    flex: 1 1 calc(50% - 10px);
    text-align: center;
  }

  .server {
    padding: 18px;
  }

  .metric {
    font-size: 14px;
  }

  .add {
    min-height: 150px;
  }

}
</style>
