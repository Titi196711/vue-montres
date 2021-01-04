<template>
  <div>
        {{ msg }}
      <h1>User Settings</h1>

  </div>
</template>

<script>
export default {
  name: "usersettings",
  data () {
  return {
    msg: 'User Settings'
   };
  },
  created() {
    console.log('Usersettings Page')
  }
}
</script>

<style scoped>

</style>