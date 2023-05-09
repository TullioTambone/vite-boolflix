<script >
import NavbarComp from './components/NavbarComp.vue';
  export default{
    name:'App',
    components:{
      NavbarComp,
    }
  }
</script>

<template>
<header>
  <NavbarComp/>
</header>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
