
export function getGenreTitle(podcastId, genres){
    return genres.filter(genre => genre.shows.includes(podcastId))
        .map(gen => gen.title)
}