<script>
export default{
    name:'SingolaCardComp',
    props:['infoFilm'],

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
        genOriginalTitle(){
            if(this.infoFilm.original_title){
                return this.infoFilm.original_title
            } else {
                return this.infoFilm.origina_name
            }
        },
        genTitle(){
            if(this.infoFilm.title){
                return this.infoFilm.title
            } else {
                return this.infoFilm.name
            }
        },
        }
}
</script>

<template>
    <img :src="`${missingImg(infoFilm)}`" alt="" id="poster">
    <div class="info">
        <h5>{{ genTitle() }}</h5>
        <h6>{{ genOriginalTitle() }}</h6>
        <img :src="`https://www.countryflagicons.com/FLAT/64/${findFlag(infoFilm)}.png`" style="width: 30px;" alt="">
        <div class="d-flex align-items-center">
            <span v-for="star in Math.ceil(starsCounter(infoFilm))" class="fa-solid fa-star" style="color: #fbff00;"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>