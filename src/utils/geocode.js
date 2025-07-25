const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(address) + '&format=json&limit=1';
    request({
        url, json: true, headers: {
            'User-Agent': 'my-weather-app (arshiarya2006@gmail.com)' // Replace with your email
        }
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined);
        } else if ( body.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            const data = body[0];
            callback(undefined, {
                latitude: data.lat,
                longitude: data.lon,
                location: data.display_name
            });
        }
    });
};

module.exports = geocode;
