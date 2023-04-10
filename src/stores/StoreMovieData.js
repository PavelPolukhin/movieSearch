import {defineStore} from "pinia";
import {ref} from "vue";
import API_SEARCH_MOVIES from "@/api/API_SEARCH_MOVIES";
import {cloneDeep} from "lodash";

export const useStoreMovieData = defineStore('useStoreMovieData', () => {
    const movieData = ref({});
    const actors = ref([]);
    const directors = ref([]);
    const writers = ref([]);

    const editPersons = (persons = []) => {
        const personsArr = cloneDeep(persons)
        const lastActorIndex = personsArr.indexOf(personsArr.reverse().find(({enProfession}) => enProfession === 'actor'));
        const actorsArr = personsArr.splice(lastActorIndex);
        actors.value.push(...actorsArr)
    }

    const getMovie = async (id) => {
        await API_SEARCH_MOVIES.getMovie(id).then((response) => {
            console.log(response.data)
            movieData.value = response.data;
            editPersons(response.data.persons)
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    return{
        getMovie,
        movieData,
    }
})
