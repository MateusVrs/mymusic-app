import authOptions from "./SpotifyAPIConnect";
import $ from 'jquery';
const request = require('request');

const getTopMusics = (limit) => {
    const top50Playlist = "37i9dQZEVXbMDoHDwVN2tF";
    limit = limit > 50 ? 50 : limit;
    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            var token = body.access_token;
            $.ajax({
                method: "GET",
                dataType: "Json",
                url: `https://api.spotify.com/v1/playlists/${top50Playlist}/tracks?market=US&limit=${limit}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(dados => {
                var topMusicsName = [];
                dados.items.map((item) => {
                    let artistObj = {
                        artistName: item.track.artists[0].name,
                        artistPath: item.track.artists[0].name,
                        musicName: item.track.name,
                        albumImg: item.track.album.images[0].url
                    }
                    topMusicsName.push(artistObj);
                });
                localStorage.setItem("topMusics", JSON.stringify(topMusicsName));
            });
        }
    });
}

export default getTopMusics;