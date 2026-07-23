<template>
  <section>

    <h2>System Logs</h2>

    <ul>

      <li
        v-for="(log, index) in logs"
        :key="log.id ?? index"
      >
        {{ log.timestamp }}
        -
        {{ log.level }}
        -
        {{ log.message }}
      </li>

    </ul>

  </section>
</template>

<script setup>
defineProps({
    logs: {
        type: Array,
        required: true,
    },
});
</script>