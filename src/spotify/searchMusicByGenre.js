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
    
    return response;

}

export default searchMusicByGenre;