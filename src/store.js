import {reactive} from 'vue'

export const store = reactive({
    arrayMovie: [],
    arrayTv: [],
    typeApi: ['movie', 'tv'],
    pathImg: 'http://image.tmdb.org/t/p/w500/',
    textInput:'',
    stars: ['<i class="fa-solid fa-star" style="color: #e7fe39;"></i>'],
    control: false,
})