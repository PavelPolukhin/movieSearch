export const nameMatching = (field = '') => {
    switch (field){
        case 'countries':
            return 'Страна производста'
        case 'description':
            return 'Описание'
        case 'genres':
            return 'Жанры'
        case 'movieLength':
            return 'Длительность'
        case 'rating':
            return 'Рейтинг'
        case 'type':
            return 'Тип'
        case 'year':
            return 'Год'
        case 'budget':
            return 'Бюджет'
        case 'movie':
            return 'Фильм'
        case 'tv-series':
            return 'Сериал'
        case 'cartoon':
            return 'Мультфильм'
        case 'kp':
            return 'Кинопоиск'
        case 'imdb':
            return 'IMDB'
        default:
            return field;
    }
}
