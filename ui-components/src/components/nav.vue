<script setup></script>

<template>
  <!-- no working links yet -->
  <nav>
    <div class="logo">ApexPulse</div>

    <ul>
      <li>Overview</li>
      <li>Fleet</li>
      <li>Logs</li>
      <li>User</li>
    </ul>
  </nav>
</template>

<style scoped>
nav{
  background: #222;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
}

.logo{
  font-size: 22px;
  font-weight: bold;
}

ul{
  list-style: none;
  display: flex;
  gap: 30px;
  font-size: 14px;
}
</style>