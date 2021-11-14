import $ from 'jquery';
import getToken from './getToken';

async function getGenreSeeds() {
    var response = await $.ajax({
        method: "GET",
        dataType: "Json",
        url: `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    let genreSeedsJSON = await response.genres;
    return await genreSeedsJSON;


}

export default getGenreSeeds;