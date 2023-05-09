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
        store.arrayFilms= []
        store.arrayTv= []
        if(store.textInput !== ''){
          
          axios.get(`https://api.themoviedb.org/3/search/${store.typeSearch}?api_key=91f273529fd161bbc1fe55678fe9d7de&query=${store.textInput}`)

          .then( res =>{

            if(store.typeSearch == 'movie'){

              store.arrayFilms = res.data.results
              store.arrayFilms.forEach(element => {
                if(element.title.toLowerCase().startsWith(store.textInput)){

                  console.log(element.title)
                }else{
                  
                }
              });
            } else{
              store.arrayTv = res.data.results
              store.arrayTv.forEach(element => {
                if(element.title.toLowerCase().startsWith(store.textInput)){

                  console.log(element.title)
                }else{
                  
              }})
            }
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
<main>

</main>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
