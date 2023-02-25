const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f9f45bf3e2mshca120c63e75ef74p1982d8jsn2b3e0eea557a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityname.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response);

            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}

const placesWeather = () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
        .then(response => response.json())
        .then((response) => {

            lonpct.innerHTML = response.cloud_pct;
            lontemp.innerHTML = response.temp;
            lonfeel.innerHTML = response.feels_like;
            lonhum.innerHTML = response.humidity;
            lonmin.innerHTML = response.humidity;
            lonmin.innerHTML = response.min_temp;
            lonmax.innerHTML = response.max_temp;
            lonwin.innerHTML = response.wind_speed;
            londeg.innerHTML = response.wind_degrees;
            lonrise.innerHTML = response.sunrise;
            lonset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
        .then(response => response.json())
        .then((response) => {

            bospct.innerHTML = response.cloud_pct;
            bostemp.innerHTML = response.temp;
            bosfeel.innerHTML = response.feels_like;
            boshum.innerHTML = response.humidity;
            bosmin.innerHTML = response.humidity;
            bosmin.innerHTML = response.min_temp;
            bosmax.innerHTML = response.max_temp;
            boswin.innerHTML = response.wind_speed;
            bosdeg.innerHTML = response.wind_degrees;
            bosrise.innerHTML = response.sunrise;
            bosset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi', options)
        .then(response => response.json())
        .then((response) => {

            karpct.innerHTML = response.cloud_pct;
            kartemp.innerHTML = response.temp;
            karfeel.innerHTML = response.feels_like;
            karhum.innerHTML = response.humidity;
            karmin.innerHTML = response.humidity;
            karmin.innerHTML = response.min_temp;
            karmax.innerHTML = response.max_temp;
            karwin.innerHTML = response.wind_speed;
            kardeg.innerHTML = response.wind_degrees;
            karrise.innerHTML = response.sunrise;
            karset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
        .then(response => response.json())
        .then((response) => {

            kolpct.innerHTML = response.cloud_pct;
            koltemp.innerHTML = response.temp;
            kolfeel.innerHTML = response.feels_like;
            kolhum.innerHTML = response.humidity;
            kolmin.innerHTML = response.humidity;
            kolmin.innerHTML = response.min_temp;
            kolmax.innerHTML = response.max_temp;
            kolwin.innerHTML = response.wind_speed;
            koldeg.innerHTML = response.wind_degrees;
            kolrise.innerHTML = response.sunrise;
            kolset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
        .then(response => response.json())
        .then((response) => {

            luckpct.innerHTML = response.cloud_pct;
            lucktemp.innerHTML = response.temp;
            luckfeel.innerHTML = response.feels_like;
            luckhum.innerHTML = response.humidity;
            luckmin.innerHTML = response.humidity;
            luckmin.innerHTML = response.min_temp;
            luckmax.innerHTML = response.max_temp;
            luckwin.innerHTML = response.wind_speed;
            luckdeg.innerHTML = response.wind_degrees;
            luckrise.innerHTML = response.sunrise;
            luckset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
        .then(response => response.json())
        .then((response) => {

            sydpct.innerHTML = response.cloud_pct;
            sydtemp.innerHTML = response.temp;
            sydfeel.innerHTML = response.feels_like;
            sydhum.innerHTML = response.humidity;
            sydmin.innerHTML = response.humidity;
            sydmin.innerHTML = response.min_temp;
            sydmax.innerHTML = response.max_temp;
            sydwin.innerHTML = response.wind_speed;
            syddeg.innerHTML = response.wind_degrees;
            sydrise.innerHTML = response.sunrise;
            sydset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}

search.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

chen.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather("Chennai");
});

pune.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather("Pune");
});

del.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather("Delhi");
});

getWeather("Mumbai")
document.addEventListener('DOMContentLoaded', function() {
    placesWeather();
});


const newTabWeather = () => {
    let cityIden = document.getElementById('cityname').innerHTML;

    const link = `https://www.google.com/search?q=weather+of+${cityIden}&rlz=1C1GCEA_enIN1012IN1012&sxsrf=AJOqlzVwOHcd5mHPM_PlChlyOpNDICOt7g%3A1677341771143&ei=SzT6Y9ypCMLmhwOguLaoCw&ved=0ahUKEwic-72DibH9AhVC82EKHSCcDbUQ4dUDCA8&uact=5&oq=weather+of+${cityIden}&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCAAQgAQQRhCAAjIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoNCAAQRxDWBBDJAxCwAzoICAAQkgMQsAM6BAgjECc6CggAELEDEMkDEEM6BQgAEJECOgQIABBDOgcIABCxAxBDOg0IABCABBAUEIcCELEDOggIABCABBCxAzoKCAAQgAQQFBCHAjoLCAAQgAQQsQMQyQM6CAgAELEDEIMBSgQIQRgAUOUtWKhAYNRIaAlwAHgAgAHZBIgByRSSAQcyLTkuNS0xmAEAoAEByAEJwAEB&sclient=gws-wiz-serp`;
    
    window.open(link, "_blank");
}

const moreInfoButt = document.querySelectorAll('.showMore');
moreInfoButt.forEach((button) => {
    button.addEventListener("click", (e) => {
        newTabWeather();
    });
});


