import $ from 'jquery';
import getToken from './getToken';

async function searchMusic(musicSearch, limit) {
    var response = await $.ajax({
        method: "GET",
        dataType: "Json",
        url: `https://api.spotify.com/v1/search?q=${musicSearch}&type=track&limit=${limit}`,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    let tracksJSON = await response.tracks;
    return await tracksJSON;


}

export default searchMusic;
