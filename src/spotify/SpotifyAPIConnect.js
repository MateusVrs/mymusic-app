var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
var client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

export default authOptions;
