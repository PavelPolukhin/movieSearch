export const setAgeRatingClass = (ageRating) => {
    if (!ageRating) {
        return '';
    }
    switch (true) {
        case ((ageRating >= 6 && ageRating < 12)):
            return 'ageRating-green'
        case ((ageRating >= 12 && ageRating < 18)):
            return 'ageRating-yellow'
        case (ageRating >= 18):
            return 'ageRating-red'
        default:
            return '';
    }
}
