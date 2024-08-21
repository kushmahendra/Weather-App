import React, { useState } from 'react';
import Weatherdetails from './Weatherdetails';
import Weatherforecast from './Weatherforecast';
import Locationweather from './Locationweather';

const Searchbar = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    tempMax: 19,
    tempMin: 15,
    humidity: 58,
    windSpeed: 5,
    cloudCover: 86,
    temperature: 16,
    cityName: 'London',
    country: "United Kingdom",
    timestamp: "06:09 - Monday, 9 Sep '23",
    forecastTime: "09:06",
    forecastCondition: "Snow",

  });

  const Change = async () => {
    try {
      const apiKey = '9b74c87d7dd343f59a6201937241908';
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&hours=1`;

      const response = await fetch(url);
      const data = await response.json();

      if (data && data.current && data.location && data.forecast) {
        const current = data.current;
        const location = data.location;
        const forecast = data.forecast.forecastday[0].hour[0];

        const date = new Date(location.localtime);
        const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedTimestamp = `${time} - ${dayName}, ${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} '${date.getFullYear().toString().slice(-2)}`;

        setWeatherData({
          tempMax: current.temp_c,
          tempMin: current.feelslike_c,
          humidity: current.humidity,
          windSpeed: current.wind_kph,
          cloudCover: current.cloud,
          temperature: current.temp_c,
          cityName: location.name,
          country: location.country,
          timestamp: formattedTimestamp,
          forecastTime: forecast.time.split(' ')[1],
          forecastCondition: forecast.condition.text

        });
      } else {
        console.error('Error fetching data', data.error?.info || 'Unknown error');
      }
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div
      className="  h-screen flex lg:flex-row flex-col w-screen"
    >
      <div className='w-full flex'>

        <Locationweather {...weatherData} />
      </div>
      <div className='flex flex-col  lg:w-[30%] md:w-[40%] w-[50%] pt-5 absolute  z-50 top-0 right-0 gap-  '>
        <div className='flex flex-row items-center'>
          <input
            type="search"
            placeholder="Search Location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="pl- text-lg bg-transparent text-white text-left w-full border-none placeholder-white outline-none"
            onKeyPress={(e) => e.key === 'Enter' && Change()} // Allow Enter key to trigger search
          />
          <i
            onClick={Change} // Trigger search on click
            className="fa-solid fa-magnifying-glass text-2xl text-white mt-2 mr-2 cursor-pointer"
          ></i>
        </div>

        <hr className='w-full' />

      </div>
      <div className='  flex h-full justify-center  min-w-[30%] backdrop-blur items-center'>

        <div className=" flex flex-col items-center  p-4 w-full">

          {/* <hr className='w-full mt-8' /> */}
          <Weatherdetails {...weatherData} />
          <hr className='lg:w-full ' />
          <Weatherforecast
            tempMin={weatherData.tempMin}
            time={weatherData.forecastTime}
            conditionText={weatherData.forecastCondition}
          />
        </div>
      </div>
    </div>

  );
}

export default Searchbar;
