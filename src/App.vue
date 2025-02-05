// src/App.vue
<template>
  <div id="app">
    <h1>AI-Powered Group Planning System</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/group">Group Overview</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>


<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
nav {
  margin: 10px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #35495e;
}
</style>