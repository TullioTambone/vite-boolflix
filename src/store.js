import {reactive} from 'vue'

export const store = reactive({
    arrayFilms: [],
    arrayTv: [],
    textInput:'',
    typeSearch:'movie',
    control: false,
})