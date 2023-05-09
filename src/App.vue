<script >
import axios from 'axios'
import {store} from './store'
import NavbarComp from './components/NavbarComp.vue'
import CardSectionComp from './components/CardSectionComp.vue'
  export default{
    name:'App',
    components:{
      NavbarComp,
      CardSectionComp,
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
        store.arrayMovie = []
        store.arrayTv= []
        store.typeApi.forEach((element, index) =>{

          if(store.textInput !== ''){
            axios.get(`https://api.themoviedb.org/3/search/${element}?api_key=91f273529fd161bbc1fe55678fe9d7de&query=${store.textInput}`)
            .then( res =>{
              if(element == 'movie'){
                store.arrayMovie = res.data.results
              } else{
                store.arrayTv = res.data.results   
              }
            })
          } else{
          }
        })
      }
    },
    methods: {

    }
  }
</script>

<template>
  <div id="web-app">
    <header>
      <NavbarComp @searchInArray="callApi"/>
    </header>
    <main>
      <CardSectionComp/>
    </main>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';
#web-app{
  height: 100vh;
  main{
    background-color: #141414;
    height: 90vh;
    overflow-y: auto;
  }
}
</style>
