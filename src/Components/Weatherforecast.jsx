import React from 'react';

const Weatherforecast = ({
  tempMin = 15,
  time = "09:06",
  conditionText = "Snow" // Default value for condition text
}) => {
  return (
    <div className='text-white m-4'>
      <div className='text-left font-semibold pl-6'>Today's  Weather  Forecast...</div>
      <div className='flex justify-start pl-8 py-6 gap-10'>
        <i className="fa-solid fa-snowflake text-4xl justify-between"></i>
        <div >
          <h1 className='text-center'>{time}</h1>
          <h1 >{conditionText}</h1>
        </div>
        <h1 className='text-3xl'>{tempMin}<sup className='text-sm 'style={{ top: '-1em' }}>o</sup></h1>
      </div>
    </div>
  );
}

export default Weatherforecast;
