<script setup>
defineProps({
  logs: {
    type: Array,
    required: true,
  },
});

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
</script>

<template>
  <section>
    <div class="section-heading">INTERACTIVE SYSTEM LOGS</div>

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
        <tr v-for="log in logs" :key="log.id">
          <td>{{ formatDate(log.timestamp) }}</td>

          <td>
            <span class="tag" :class="log.level.toLowerCase()">
              {{ log.level }}
            </span>
          </td>

          <td>{{ log.service }}</td>

          <td>{{ log.message }}</td>
        </tr>
      </tbody>
    </table>
  </section>

  <div class="footer">© 2026 APEXPULSE</div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid lightgray;
  padding: 10px;
  font-size: 13px;
  text-align: left;
}

.tag {
  padding: 3px 10px;
  display: inline-block;
  font-size: 11px;
}

.info {
  background: #1976d2;
  color: white;
}
.critical {
  background: #222;
  color: white;
}

.warning {
  background: gray;
  color: white;
}

.footer {
  text-align: center;
  padding: 20px;
  color: gray;
  border-top: 1px solid lightgray;
}
</style>
