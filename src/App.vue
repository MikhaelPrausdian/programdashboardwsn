<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Login />
  <!-- <Register /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from './components/login/LoginForm.vue'
// import Register from './components/register/RegisterForm.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Login,
    // Register
  },
}
</script>

<style>

</style>
