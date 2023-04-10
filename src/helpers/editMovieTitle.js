import {nameMatching} from "@/helpers/nameMatching";

export const editMovieTitle = (type) => {
    return `${nameMatching(type)}е`;
}
