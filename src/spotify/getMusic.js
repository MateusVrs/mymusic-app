import $ from 'jquery';
import getToken from './getToken';

async function getMusic(musicId) {
    var response = await $.ajax({
        method: "GET",
        dataType: "Json",
        url: `https://api.spotify.com/v1/tracks/${musicId}`,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    var trackJSON = await response;
    return await trackJSON;


}

export default getMusic;
