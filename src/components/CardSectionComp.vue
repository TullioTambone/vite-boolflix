<script>
import {store} from '../store'
import SingolaCardComp from './SingolaCardComp.vue'
    export default{
        name:'CardSectionComp',
        components:{
            SingolaCardComp,
        },
        data(){
            return{
                store,
            }
        },
    }
</script>

<template>
    <div class="container mt-2 mb-5">
        <div class="row" v-if="store.typeApi[0] == 'movie'">
            <h1 v-if="store.arrayMovie.length !== 0" class="text-center">Films</h1>
            <div class="my-card col-12 col-md-4 col-lg-2" v-for="(element, index) in store.arrayMovie" 
            :key="index">
                <SingolaCardComp :infoFilm="element"/>
            </div>
        </div>
        <div class="row m-auto mt-3" v-if="store.typeApi[1] == 'tv'">
            <h2 v-if="store.arrayTv.length !== 0" class="text-center">Serie</h2>
            <div class="my-card col-12 col-md-4 col-lg-2" v-for="(element, index) in store.arrayTv" 
            :key="index">
                <SingolaCardComp :infoFilm="element"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .row{
        gap: 1rem;
        justify-content: center;
        .my-card{
            position: relative;
            padding: 0;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
}
</style>