const city_Name = document.getElementById("city-name");
const country_Name = document.getElementById("country-name");
const api_Key = "b97b602322673de3557a7759612332fc";
const default_Url = `https://api.openweathermap.org/data/2.5/weather?q=Richmond Hill, Canada&appid=${api_Key}&units=metric`;
const default_Url2 = `https://api.openweathermap.org/data/2.5/weather?q=Markham, Canada&appid=${api_Key}&units=metric`;
const default_Url3 = `https://api.openweathermap.org/data/2.5/weather?q=Toronto, Canada&appid=${api_Key}&units=metric`;

const check_Weather = document.getElementById("check-weather");

check_Weather.addEventListener("click", () => {
  if (city_Name.value === "" && country_Name.value === "") {
    alert("Please input the necessary fields");
  } else {
    console.log(city_Name.value);
    console.log(country_Name.value);
    const default_Url4 = `https://api.openweathermap.org/data/2.5/weather?q=${city_Name.value}, ${country_Name.value}&appid=${api_Key}&units=metric`;
    fetch(default_Url4, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("default-country0").innerHTML = data.name;
        document.getElementById("default-temp0").innerHTML =
          "Temperature: " + data.main.temp + " ℃";
        document.getElementById("default-feel0").innerHTML =
          "Feels like: " + data.main.feels_like + " ℃";
        document.getElementById(
          "default-icon0"
        ).innerHTML = `<p id="default-icon1"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="no image"></p>`;
      });
  }
});

fetch(default_Url, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("default-country1").innerHTML = data.name;
    document.getElementById("default-temp1").innerHTML =
      "Temperature: " + data.main.temp + " ℃";
    document.getElementById("default-feel1").innerHTML =
      "Feels like: " + data.main.feels_like + " ℃";
    document.getElementById(
      "default-icon1"
    ).innerHTML = `<p id="default-icon1"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="no image"></p>`;
  });

fetch(default_Url2, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("default-country2").innerHTML = data.name;
    document.getElementById("default-temp2").innerHTML =
      "Temperature: " + data.main.temp + " ℃";
    document.getElementById("default-feel2").innerHTML =
      "Feels like: " + data.main.feels_like + " ℃";
    document.getElementById(
      "default-icon2"
    ).innerHTML = `<p id="default-icon1"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="no image"></p>`;
  });

fetch(default_Url3, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("default-country3").innerHTML = data.name;
    document.getElementById("default-temp3").innerHTML =
      "Temperature: " + data.main.temp + " ℃";
    document.getElementById("default-feel3").innerHTML =
      "Feels like: " + data.main.feels_like + " ℃";
    document.getElementById(
      "default-icon3"
    ).innerHTML = `<p id="default-icon1"><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="no image"></p>`;
  });
