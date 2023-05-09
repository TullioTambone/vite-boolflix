<script>
import {store} from '../store'
    export default{
        name:'CardSectionComp',
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>
    <div class="container row m-auto">
        <div class="card col-12 col-md-4 col-lg-2" v-for="(element, index) in store.arrayMovie" 
        :key="index">
            <h3>{{ element.title }}</h3>
            <h5>{{ element.original_title }}</h5>
            <span>{{ element.original_language }}</span>
            <h6>{{ element.vote_average }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    padding-top: 50px;
    color: white;
}
</style>