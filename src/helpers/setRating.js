import {toNumber} from "lodash";
import {nameMatching} from "@/helpers/nameMatching";

const ratingClass = (rating) => {
    rating = toNumber(rating);
    switch (true) {
        case (rating <= 5):
            return 'rating-red'
        case (rating > 5 && rating <= 7):
            return 'rating-yellow'
        case (rating > 7):
            return 'rating-green'
    }
}

const editRating = (rating) => {
    return Math.trunc(toNumber(rating) * 100) / 100;
}

export const setRating = (rating = {}, votes = {}, needShow = []) => {
    const returnArr = [];
    needShow.map((name) => {
        if(rating[name]) {
            const id = name;
            const pushItem = `${nameMatching(name)}: <span class="${ratingClass(rating[name])}">${editRating(rating[name])}</span><br>(голосов: ${votes[name]?.toLocaleString()})`
            returnArr.push({
                html: pushItem,
                id,
            })
        }
    })
    return returnArr;
}
