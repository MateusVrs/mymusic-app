import $ from 'jquery';
import getToken from './getToken';

async function getMusic(musicPath, artistPath) {
    var response = await $.ajax({
        method: "GET",
        dataType: "Json",
        url: `https://api.spotify.com/v1/search?q=track:${musicPath}+artist:${artistPath}&type=track&limit=1`,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    var trackJSON = await response.tracks.items[0];
    return await trackJSON;


}

export default getMusic;
