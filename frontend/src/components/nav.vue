<template>
  <nav class="navbar">
    <div class="logo">
      ApexPulse
    </div>

    <ul class="links">
      <li><a href="#">Overview</a></li>
      <li><a href="#">Fleet</a></li>
      <li><a href="#">Logs</a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar{
    position:sticky;
    top:0;
    z-index:1000;

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:16px 30px;

    background:#1f2937;
    color:white;

    box-shadow:0 3px 10px rgba(0,0,0,.15);
}

.logo{
    font-size:24px;
    font-weight:bold;
}

.links{
    display:flex;
    gap:30px;
    list-style:none;
}

.links a{
    color:white;
    text-decoration:none;
    transition:.3s;
}

.links a:hover{
    color:#60a5fa;
}

@media(max-width:768px){

.links{
    gap:15px;
    font-size:14px;
}

.logo{
    font-size:20px;
}

}
</style>