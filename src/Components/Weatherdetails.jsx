import React from 'react';

const Weatherdetails = ({
  tempMax = 19,
  tempMin = 15,
  humidity = 58,
  windSpeed = 5,
  cloudCover = 86,
}) => {
  return (
    <>
   
    <div className='text-white shadow-lg'>
      <h1 className='text-center lg:text-start text-md p-4 py-6'>Weather Details...</h1>
      <h1 className='text-start text-md font-semibold p-4'>THUNDERSTORM WITH LIGHT DRIZZLE</h1>  
     
      <div className='flex justify-between items-center mx-2 p-2'>
        <h1>Temp max</h1>
        <div className="flex items-center space-x-2">
          <h1>{tempMax}<sup>o</sup></h1>
          <i className="fa-solid fa-temperature-half text-red-300 px-2 text-xl"></i>
        </div>
      </div> 

      <div className="flex justify-between items-center mx-2 p-2">
        <h1>Temp min</h1>
        <div className="flex items-center space-x-2">
          <h2>{tempMin}<sup>o</sup></h2>
          <i className="fa-solid fa-temperature-half text-blue-300 px-2 text-xl"></i>
        </div>
      </div>

      <div className='flex justify-between items-center mx-2 p-2'>
        <h1>Humidity</h1>
        <div className="flex items-center space-x-2">
          <h1>{humidity}% </h1>
          <i className="fa-solid fa-droplet px-2 text-xl"></i>
        </div>
      </div>  

      <div className='flex justify-between items-center mx-2 p-2'>
        <h1>Cloudy</h1>
        <div className="flex items-center space-x-2">
          <h1>{cloudCover}%</h1>
          <i className="fa-solid fa-cloud px-2 text-xl"></i>
        </div>
      </div>  

      <div className='flex justify-between items-center mx-2 p-2'>
        <h1>Wind</h1>
        <div className="flex items-center space-x-2">
          <h1>{windSpeed} km/h</h1>
          <i className="fa-solid fa-wind px-2 text-xl"></i>
        </div>
      </div> 
         
    </div>
    </>
  );
}

export default Weatherdetails;
