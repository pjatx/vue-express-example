<template>
  <div id="app">
    <ul>
      <li v-for="skill in skills">{{ skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
