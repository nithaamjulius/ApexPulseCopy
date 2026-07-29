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
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    padding: 16px 30px;

    background: #1f2937;
    color: white;

    box-shadow: 0 3px 10px rgba(0,0,0,.15);
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.links {
    display: flex;
    gap: 30px;
    list-style: none;
    flex-wrap: wrap;
}

.links a {
    color: white;
    text-decoration: none;
    transition: .3s;
}

.links a:hover {
    color: #60a5fa;
}

/* Tablets */
@media (max-width: 992px) {

    .navbar {
        padding: 14px 20px;
    }

    .links {
        gap: 20px;
    }

}

/* Phones */
@media (max-width: 768px) {

    .navbar {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .logo {
        font-size: 22px;
    }

    .links {
        width: 100%;
        justify-content: space-between;
        gap: 10px;
        font-size: 14px;
    }

}

/* Small phones */
@media (max-width: 480px) {

    .navbar {
        padding: 15px;
    }

    .links {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 12px;
    }

    .links li {
        width: 100%;
    }

    .links a {
        display: block;
        width: 100%;
        padding: 8px 0;
    }

}
</style>