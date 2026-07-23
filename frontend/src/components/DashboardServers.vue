<template>
  <section>

    <h2>Servers</h2>

    <ul>

      <li
        v-for="server in servers"
        :key="server.server_id"
      >
        {{ server.server_name }} - {{ server.status }}
      </li>

    </ul>

  </section>
</template>

<script setup>
defineProps({
    servers: {
        type: Array,
        required: true,
    },
});
</script>