import Axios from 'axios';
import {DEFAULT_SEARCH_FIELDS} from "@/constants";
import {joinArray} from "@/helpers/joinArray";
const RESOURCE_NAME = '/movie';


export default {
    getMovies({...options}) {
        const arrOptions = Object.entries(options).map(([key, value]) => {
            return [`${key}=${value}&`]
        });
        const searchString = joinArray(arrOptions, '').slice(0, -1)
        return Axios.get(`${RESOURCE_NAME}?selectFields=${DEFAULT_SEARCH_FIELDS}&${searchString}`);
    },
    getMovie(id) {
        return Axios.get(`${RESOURCE_NAME}/${id}`)
    }
};
