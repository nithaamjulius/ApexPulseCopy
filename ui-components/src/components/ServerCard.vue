<script setup></script>

<template>
  <section>
    <div class="section-heading">
      SERVER FLEET STATUS
    </div>

    <div class="filters">
      <div class="filter active">ALL</div>
      <div class="filter">HEALTHY</div>
      <div class="filter">WARNING</div>
      <div class="filter">CRITICAL</div>
    </div>

    <div class="servers">
      <!-- 1 -->
      <div class="server">
        <div class="section-heading">
          <b>API-Gateway-01</b>
          <div class="status">Healthy</div>
        </div>

        <div>CPU Load</div>

        <div class="bar">
          <div class="fill" style="width: 42%;"></div>
        </div>

        <div class="metric">
          <span>Memory</span>
          <span>8.2 / 16 GB</span>
        </div>
      </div>

      <!-- 2 -->
      <div class="server">
        <div class="heading">
          <b>Auth-Cluster-02</b>
          <div class="status">Warning</div>
        </div>

        <div>CPU Load</div>

        <div class="bar">
          <div class="fill" style="width: 80%;"></div>
        </div>

        <div class="metric">
          <span>Memory</span>
          <span>10 / 16 GB</span>
        </div>
      </div>

      <!-- 3 -->
       <div class="server">
        <div class="heading">
          <b>DB-Primary-01</b>
          <div class="status critical">Critical</div>
        </div>

        <div>CPU Load</div>

        <div class="bar">
          <div class="fill" style="width: 95%;"></div>
        </div>

        <div class="metric">
          <span>Memory</span>
          <span>31 / 32 GB</span>
        </div>
       </div>

       <!-- 4 -->
        <div class="server">
          <div class="heading">
            <b>Cache-Redis-01</b>
            <div class="status">Healthy</div>
          </div>

          <div>CPU Load</div>

          <div class="bar">
            <div class="fill" style="width: 74%;"></div>
          </div>

          <div class="metric">
            <span>Memory</span>
            <span>3.1 / 8 GB</span>
          </div>
        </div>

        <!-- 5 -->
        <div class="server">
          <div class="heading">
            <b>Worker-Node-01</b>
            <div class="status">Healthy</div>
          </div>

          <div>CPU Load</div>

          <div class="bar">
            <div class="fill" style="width: 74%;"></div>
          </div>

          <div class="metric">
            <span>Memory</span>
            <span>6.5 / 8 GB</span>
          </div>
        </div>
        <div class="add">+ ADD SERVER</div>
    </div>
  </section>
</template>

<style scoped>
.filters{
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filter{
  border: 1px solid lightgray;
  padding: 6px 15px;
  font-size: 12px;
  cursor: pointer;
}

.active{
  background: #222;
  color: white;
}

.servers{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.server{
  border: 1px solid lightgray;
  padding: 15px;
}

.heading{
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.status{
  padding: 3px 10px;
  font-size: 11px;
}

.bar{
  height: 10px;
  margin: 10px;
  overflow: hidden;
}

.fill{
  height: 100%;
  background: #444;
}

.metric{
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  font-size: 13px;
}

.add{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed lightgray;
  min-height: 210px;
  color: gray;
}
</style>