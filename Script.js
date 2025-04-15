const apiKey="YOUR_API_KEY";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#input");
const btn = document.querySelector("#submit");
async function getWeatherData(city) {
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    const data=await response.json();

    
    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temp").innerText=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerText=data.main.humidity+"%";
    document.querySelector(".wind").innerText=data.wind.speed+" km/h";
}
btn.addEventListener("click", () => {
    getWeatherData(searchBox.value);
});
