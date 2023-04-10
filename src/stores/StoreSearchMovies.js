import {defineStore} from "pinia";
import {ref} from "vue";
import API_SEARCH_MOVIES from "@/api/API_SEARCH_MOVIES";
import {DEFAULT_MOVIES_ON_PAGE, DEFAULT_PAGE_NUMBER} from "@/constants";

export const useStoreSearchMovie = defineStore('useStoreSearchMovie', () => {
    const searchMoviesData = ref([]);
    const top10MoviesData = ref([]);

    const searchMovies = async ({...options}) => {
        const requestOptions = {
            name: options.searchString || "",
            limit: options.moviesOnPage || DEFAULT_MOVIES_ON_PAGE,
            page: options.pageNumber || DEFAULT_PAGE_NUMBER,
        }
        if (options.requestOnSlider) {
            requestOptions.top10 = "!null";
            delete requestOptions.name;
        }
        await API_SEARCH_MOVIES.getMovies(requestOptions).then((response) => {
            const result = response?.data?.docs;
            if (requestOptions.top10) {
                top10MoviesData.value = result;
                return;
            }
            searchMoviesData.value = result;
        }).catch((error) => {
            console.log(error.response.data);
        })
    };

    return {
        searchMoviesData,
        searchMovies,
        top10MoviesData,
    }
})
