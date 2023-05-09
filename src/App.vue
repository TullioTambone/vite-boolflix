<script >
import axios from 'axios'
import {store} from './store'
import NavbarComp from './components/NavbarComp.vue'
  export default{
    name:'App',
    components:{
      NavbarComp,
    },
    data(){
      return{
        store,
      }
    },
    created(){
      this.callApi
    },
    computed: {
      callApi(){
        axios.get('https://api.themoviedb.org/3')
        .then( res =>{
          console.log(res)
        })
      }
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
