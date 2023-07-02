
const API_KEY = "3b4d92665a5ac73834187e0c37ae7de9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`경도: ${lat} 위도: ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      weather.innerText=`${data.main.temp} ${data.weather[0].main} `;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}
//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
