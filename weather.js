let b1=document.querySelector("button");
let field=document.querySelector("#city");
let container=document.querySelector("#weather");

b1.addEventListener("click",
    ()=>
    {
        let city=field.value ;
        if(city==="")
        {
            alert("Plaese enter cityname");
            return;
        }
        fetchWeather(city);
    }
);

async function fetchWeather(city)
{
    try
    {
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ed570ac911dad2a255e2965a53ced74&units=metric`)
            if(response.ok)
            {
                let data=await response.json();
                displayWeather(data);
            }
            else
            {
                alert("city not found");
            }
    }
    catch(error)
    {
        console.log(error)
    }
} 
function displayWeather(data)
{
    let{main , sys , name , weather , wind}=data;
    container.innerHTML=`<h2>Weather in ${name}, ${sys.country}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" class="weather-icon" alt="Weather Icon">`
} 
// console.log(main.temp,main.humidity,sys.country,name,weather[0].description)
