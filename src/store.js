import {reactive} from 'vue'

export const store = reactive({
    arrayMovie: [],
    arrayTv: [],
    typeApi: ['movie', 'tv'],
    pathImg: 'http://image.tmdb.org/t/p/w500/',
    textInput:'',
    control: false,
})