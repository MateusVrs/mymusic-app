import $ from 'jquery';

var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
var client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

function getToken() {
    var response = $.ajax({
        method: "POST",
        url: "https://accounts.spotify.com/api/token",
        data: {
            "grant_type": "client_credentials",
            "client_secret": client_secret,
            "client_id": client_id,
        },
        async: false
    });
    return response.responseJSON.access_token;
}

function getMusic(musicPath, artistPath) {
    var response = $.ajax({
        method: "GET",
        dataType: "Json",
        url: `https://api.spotify.com/v1/search?q=track:${musicPath}+artist:${artistPath}&type=track&limit=1`,
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        async: false
    });
    return response.responseJSON.tracks.items[0];
}

export default getMusic;
