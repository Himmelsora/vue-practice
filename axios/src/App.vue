<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/search_ip">Search IP</router-link>

    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
