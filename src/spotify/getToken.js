import $ from "jquery";

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

export default getToken;
