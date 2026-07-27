<template>
  <div class="dashboard-layout">
    <main class="dashboard-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.dashboard-layout {
  min-height: 100vh;
}

.dashboard-content {
  padding: 2rem;
}
</style>