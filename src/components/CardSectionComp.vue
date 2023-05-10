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
                if (e.vote_average == '' || e.vote_average == 0){
                    return e.vote_average
                } else if(e.vote_average < 2 && e.vote_average >= 1){
                    return e.vote_average
                } else if(e.vote_average < 3 && e.vote_average >= 2){
                    return e.vote_average
                } else if(e.vote_average < 4 && e.vote_average >= 3){
                    return e.vote_average
                } else if(e.vote_average < 5 && e.vote_average >= 4){
                    return e.vote_average
                } else{
                    return "5"
                }
            },
            findFlag(e){
                if(e.original_language.toLowerCase() == "en"){
                    return 'GB'
                } else if(e.original_language.toLowerCase() == "ko"){
                    return 'KR'
                } else if(e.original_language.toLowerCase() == "hi"){
                    return 'IN'
                } else if(e.original_language.toLowerCase() == "ja"){
                    return 'JP'
                } else if(e.original_language.toLowerCase() == "da"){
                    return 'DK'
                } else {
                    return e.original_language.toUpperCase()
                }
            },
            missingImg(e){
                if(e.poster_path == null || e.poster_path == ''){
                    return 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
                } else{
                    return `http://image.tmdb.org/t/p/w500/${e.poster_path}`
                }
            },
            
        }
    }
</script>

<template>
    <div class="container">
        <div class="row" v-if="store.typeApi[0] == 'movie'">
            <h1 v-if="store.arrayMovie.length !== 0">Films</h1>
            <div class="my-card col-12 col-md-4 col-lg-2" v-for="(element, index) in store.arrayMovie" 
            :key="index">
            <img :src="`${missingImg(element)}`" alt="" id="poster">
            <div class="info">
                <h5>{{ element.title }}</h5>
                <h6>{{ element.original_title }}</h6>
                <img :src="`https://www.countryflagicons.com/FLAT/64/${findFlag(element)}.png`" style="width: 30px;" alt="">
                <div class="d-flex align-items-center">
                    <span v-for="star in Math.ceil(starsCounter(element))" class="fa-solid fa-star" style="color: #fbff00;"></span>
                </div>
            </div>
            </div>
        </div>
        <div class="row m-auto" v-if="store.typeApi[1] == 'tv'">
            <h2 v-if="store.arrayTv.length !== 0">Serie</h2>
            <div class="my-card col-12 col-md-4 col-lg-2" v-for="(element, index) in store.arrayTv" 
            :key="index">
            <img :src="`http://image.tmdb.org/t/p/w500/${element.poster_path}`" alt="" id="poster">
            <div class="info">
                <h5>{{ element.name }}</h5>
                <h6>{{ element.original_name }}</h6>
                <img :src="`https://www.countryflagicons.com/FLAT/64/${findFlag(element)}.png`" style="width: 30px;" alt="">
                <div class="d-flex align-items-center">
                    <span v-for="star in Math.ceil(starsCounter(element))"  class="fa-solid fa-star" style="color: #fbff00;"></span>
                </div>
            </div>
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
            .info{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
            }
            #poster{
                width: 100%;
            }
            &:hover .info{
                opacity: 1;
                transition: 1s ease;
            }
            &:hover #poster{
                opacity: 0.2;
                transition: 0.5s ease;
            }
        }
    }
}
</style>