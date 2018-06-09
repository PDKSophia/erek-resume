<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {

}
* {
  margin: 0;
  padding: 0;
}
@media screen and (min-width: 320px) and (max-width: 420){
  .box {
    margin: 3rem;
  }
}
</style>
