<script setup></script>

<template>
  <section>
    <div class="section-heading">INTERACTIVE SYSTEM LOGS</div>

    <table>
      <tr>
        <th>Timestamp</th>
        <th>Level</th>
        <th>Service</th>
        <th>Message</th>
      </tr>

      <!-- 1 -->
      <tr>
        <td>2024-07-20 10:15</td>
        <td><span class="tag">INFO</span></td>
        <td>Auth-Service</td>
        <td>User session refreshed successfully.</td>
      </tr>

      <!-- 2 -->
      <tr>
        <td>2024-07-20 10:16</td>
        <td><span class="tag warning">WARNING</span></td>
        <td>Auth-Cluster-02</td>
        <td>High memory consumption detected (&gt;85%).</td>
      </tr>

      <!-- 3 -->
      <tr>
        <td>2024-07-20 10:20</td>
        <td><span class="tag critical">CRITICAL</span></td>
        <td>DB-Primary-01</td>
        <td>Connection pool exhausted under heavy load.</td>
      </tr>

      <!-- 4 -->
      <tr>
        <td>2024-07-20 10:23</td>
        <td><span class="tag">INFO</span></td>
        <td>Payment Gateway</td>
        <td>Transaction #95413 processed successfully.</td>
      </tr>

      <!-- 5 -->
      <tr>
        <td>2024-07-20 10:30</td>
        <td><span class="tag warning">WARNING</span></td>
        <td>Worker-Node-01</td>
        <td>Scheduled background job delayed.</td>
      </tr>
    </table>
  </section>

  <div class="footer">© 2026 APEXPULSE</div>
</template>

<style scoped>
  table{
    width: 100%;
    border-collapse: collapse;
  }

  th, td{
    border: 1px solid lightgray;
    padding: 10px;
    font-size: 13px;
    text-align: left;
  }

  .tag{
    padding: 3px 10px;
    display: inline-block;
    font-size: 11px;
  }

  .critical{
    background: #222;
    color: white;
  }

  .warning{
    background: gray;
    color: white;
  }

  .footer{
    text-align: center;
    padding: 20px;
    color: gray;
    border-top: 1px solid lightgray;
  }
</style>