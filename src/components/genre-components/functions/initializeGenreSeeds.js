import getGenreSeeds from "../../../spotify/getGenreSeeds";

function randomNumber(limit) {
    return parseInt(Math.random() * limit);
}

async function initializeGenreSeeds(setGenres, setRadomGenres) {
    const genreSeeds = await getGenreSeeds();
    if (genreSeeds != null) {
        setGenres(genreSeeds);
        const arrayLength = 8
        var newRadomGenres = {
            seeds: Array(arrayLength).fill(null)
        };
        for (let i = 0; i < arrayLength; i++) {
            newRadomGenres.seeds[i] = genreSeeds[randomNumber(genreSeeds.length)];
        }
        setRadomGenres(newRadomGenres);
    }
}

export default initializeGenreSeeds;
