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
        if(store.textInput !== ''){
          
          axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=91f273529fd161bbc1fe55678fe9d7de&query=${store.textInput}`)
          .then( res =>{
            store.arrayFilms = res.data.results
            store.arrayFilms.forEach((element, index) =>{
              if(element.title.includes(store.textInput)){
                console.log(element.title)
              }
            })
          })
        } else{
        }
      }
    },
    methods: {

    }
  }
</script>

<template>
<header>
  <NavbarComp @searchInArray="callApi"/>
</header>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
