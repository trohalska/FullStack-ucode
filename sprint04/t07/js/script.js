'use strict'

let get = (id) => document.querySelector(id);
let createWithClass = (tag, clas, text) => {
    let div = document.createElement(tag)
    div.classList.add(clas)
    if (text)
        div.innerHTML = text
    return div
}

let render = (forecast) => {
    let forecastDiv = get('.forecast')
    let date = new Date(forecast.dt * 1000)
    let weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    let day = createWithClass('div', 'day')

    day.insertAdjacentHTML("beforeend",
        `<span class="dayOfWeek">${weekDay[date.getDay()]}</span>`)
    day.insertAdjacentHTML('beforeend',
        `<span class="date">${date.getDate()}.${+date.getMonth() + 1}</span>`)
    day.insertAdjacentHTML('beforeend',
        `<img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="icon">`)
    day.insertAdjacentHTML('beforeend',
        `<span class="temperature"><span>${forecast.temp.day.toFixed(0)}</span>°C</span>`)
    forecastDiv.append(day)
}

let getForecast = async (lat, lng) => {
    let forecast = fetch(`https://api.openweathermap.org/data/2.5/onecall?\
lat=${lat}&lon=${lng}&exclude=current,minutely,hourly,alerts&cnt=6&units=metric\
&appid=e13ffa4a7ab745bda274278988a240f6`)
        .then(response => response.json())
        .then(data => {
            get('.forecast').append(createWithClass('div', 'city', `${data.timezone}`))
            data.daily.slice(1, 7).map((day) => render(day))
        })
}

let start = async (lat, lng) => {
    console.log(lat)
    try {
        if ((lat === undefined || lng === undefined) && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                getForecast(position.coords.latitude, position.coords.longitude)
            })
        } else {
            getForecast(lat, lng)
        }
    } catch (e) {
        console.log('Error is' + e)
    }
}

// Kiev
let lat = 50.45466
let lng = 30.5238

// London
// let lat = 51.5266
// let lng = -0.0798

start(lat, lng);
// start();