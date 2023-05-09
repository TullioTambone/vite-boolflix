<script>
import {store} from '../store'
    export default{
        name:'CardSectionComp',
        data(){
            return{
                store,
            }
        },
        methods: {
            starsCounter(e){
                return parseInt(e.vote_average)
            }
        }
    }
</script>

<template>
    <div class="container row m-auto" v-if="store.typeApi[0] == 'movie'">
        <h1 v-if="store.arrayMovie.length !== 0">Films</h1>
        <div class="card col-12 col-md-4 col-lg-2" v-for="(element, index) in store.arrayMovie" 
        :key="index">
        <img :src="`http://image.tmdb.org/t/p/w1280/${element.poster_path}`" alt="">
            <h5>{{ element.title }}</h5>
            <h6>{{ element.original_title }}</h6>
            <span>{{ element.original_language }}</span>
            <h6>{{ this.starsCounter(element) }}</h6>
        </div>
    </div>
    <div class="container row m-auto" v-if="store.typeApi[1] == 'tv'">
        <h2 v-if="store.arrayTv.length !== 0">Serie</h2>
        <div class="card col-12 col-md-4 col-lg-2" v-for="(element, index) in store.arrayTv" 
        :key="index">
        <img :src="`http://image.tmdb.org/t/p/w500/${element.poster_path}`" alt="">
            <h3>{{ element.name }}</h3>
            <h5>{{ element.original_name }}</h5>
            <span>{{ element.original_language }}</span>
            <h6>{{ starsCounter(element, index) }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    padding-top: 50px;
    color: white;
}
</style>