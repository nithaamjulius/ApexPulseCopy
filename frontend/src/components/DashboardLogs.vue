<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  logs: {
    type: Array,
    required: true,
  },
});

const search = ref("");

const filteredLogs = computed(() => {
  return props.logs.filter((log) => {
    const term = search.value.toLowerCase();

    return (
      log.service.toLowerCase().includes(term) ||
      log.level.toLowerCase().includes(term) ||
      log.message.toLowerCase().includes(term)
    );
  });
});
</script>

<template>
  <section>
    <div class="section-heading">
      INTERACTIVE SYSTEM LOGS
    </div>

    <div class="toolbar">
      <input
        v-model="search"
        class="search"
        type="text"
        placeholder="Search logs or services..."
      />

      <span class="count">
        {{ filteredLogs.length }} entries
      </span>
    </div>

    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Level</th>
          <th>Service</th>
          <th>Message</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="log in filteredLogs"
          :key="log.id"
        >
          <td>{{ log.timestamp }}</td>

          <td>
            <span
              class="tag"
              :class="log.level.toLowerCase()"
            >
              {{ log.level }}
            </span>
          </td>

          <td>{{ log.service }}</td>

          <td>{{ log.message }}</td>
        </tr>
      </tbody>
    </table>

    <div class="footer">
      © 2026 APEXPULSE
    </div>
  </section>
</template>

<style scoped>
.toolbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:15px 0;
  gap:20px;
}

.search{
  flex:1;
  padding:10px;
  border:1px solid #ccc;
  border-radius:4px;
}

.search:focus{
  outline:none;
  border-color:#1976d2;
}

.count{
  color:#666;
  font-size:14px;
}

table{
  width:100%;
  border-collapse:collapse;
}

th,
td{
  border:1px solid lightgray;
  padding:10px;
  text-align:left;
  font-size:13px;
}

.tag{
  padding:3px 10px;
  color:white;
  border-radius:3px;
  font-size:11px;
}

.info{
  background:#1976d2;
}

.warning{
  background:#f9a825;
}

.critical{
  background:#c62828;
}

.footer{
  text-align:center;
  margin-top:20px;
  padding:20px;
  border-top:1px solid lightgray;
  color:gray;
}

section{
    margin-top:20px;
}

.section-heading{
    font-size:24px;
    font-weight:bold;
    margin-bottom:20px;
}

.toolbar{
    margin-bottom:20px;
}

.footer{
    margin-top:30px;
}
</style>