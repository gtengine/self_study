// openweathermap의 open API를 사용하여 입력한 위치에 대한 날씨 정보를 받아올 수 있다.
// fetch: url을 요청할 때 사용
// navigator.geolocation.getCurrentPosition(success, fail): 현재 실시간 나의 위치를 받아올 수 있다.

const API_KEY = "9284700b8ea24fd7608c5262892bf521";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
