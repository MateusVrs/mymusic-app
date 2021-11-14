import $ from 'jquery';
import getToken from './getToken';

async function searchMusicByGenre(genreSearch, limit) {
    var response = await $.ajax({
        method: "GET",
        dataType: "Json",
        url: `https://api.spotify.com/v1/recommendations?seed_genres=${genreSearch}&limit=${limit}`,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    let tracksJSON = {
        items: response.tracks,
        genreId: response.seeds[0].id
    };
    return tracksJSON;


}

export default searchMusicByGenre;