import getToken from "./getToken";
import $ from 'jquery';

async function getTopMusics(limit) {
    var top50Playlist = "37i9dQZEVXbMDoHDwVN2tF";
    limit = limit > 50 ? 50 : limit;

    var response = await $.ajax({
        method: "GET",
        dataType: "Json",
        url: `https://api.spotify.com/v1/playlists/${top50Playlist}/tracks?market=US&limit=${limit}`,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    var tracksJSON = await response.items;
    return await tracksJSON;
}

export default getTopMusics;