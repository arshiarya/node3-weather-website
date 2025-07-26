const request = require('request');
const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=96baba526879ee0ff55b54f28dc03946&query=' + latitude + ',' + longitude + '&units=f';
    request({url,json:true},(error,{body}) =>{
        if(error){
            callback('Unable to connect to weather service!', undefined);
        }else if(body.error){
            callback('Unable to find location. Try another search.', undefined);
        } else {
            console.log(body.current.data)
            const actual_temp = body.current.temperature; 
            const feels_like_temp = body.current.feelslike;
            callback(undefined,"Weather is " + body.current.weather_descriptions[0] + ". It is currently " + actual_temp + " degrees out." + " It feels like " + feels_like_temp + " degrees out."+ "Humidity is "+ body.current.humidity + " % ."+" The wind speed is " + body.current.wind_speed + " mph.");
        }
    })
}

module.exports = forecast;