const url = "https://api.openweathermap.org/data/2.5/";
const key = "43017adcc16fec1bcdd97caa0b45e5b5";

const setQuery = (e) => {
  if (e.keyCode === 13) {
  getResult(searchBar.value);
  }
  };
  
  const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`;
  fetch(query)
  .then((response) => {
  return response.json();
  })
  .then(displayResult)
  .catch((error) => {
  return alert("Daxil olunan şəhər adı tapılmadı", error);
  });
  };
  
  const displayResult = (result) => {
  let city = document.querySelector(".weather_container_city");
  city.innerText = `${result.name}, ${result.sys.country}`;
  
  let temp = document.querySelector(".weather_container_temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;
  
  let desc = document.querySelector(".weather_container_desc");
  desc.innerText = result.weather[0].description;
  
  let minmax = document.querySelector(".weather_container_minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

  };
  
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener("keypress", setQuery);