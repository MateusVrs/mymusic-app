import authOptions from "./SpotifyAPIConnect";
import $ from 'jquery';
const request = require('request');

const getArtists = (search, limit) => {
    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            var token = body.access_token;
            $.ajax({
                method: "GET",
                dataType: "Json",
                url: `https://api.spotify.com/v1/search?q=${search}&type=artist&limit=${limit}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(dados => {
                console.log(dados.artists.items);
            });
        }
    });
}

export default getArtists;