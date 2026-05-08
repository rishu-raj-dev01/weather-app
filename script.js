async function getWeather() {
    const city = document.getElementById("city").value;

    const apiKey = " c284f2119c4fc03fd993109835d84d1a  ";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 Temp: ${data.main.temp} °C</p>
        <p>🌥 Weather: ${data.weather[0].main}</p>
    `;
}
