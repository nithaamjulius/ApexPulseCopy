<template>
  <section class="summary-section">
    <SummaryCard :summary="summary" />
  </section>
</template>

<script setup>
import SummaryCard from "./SummaryCard.vue";

defineProps({
  summary: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.summary-section{
    margin-bottom:40px;
}
</style>
