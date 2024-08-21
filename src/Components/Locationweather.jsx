import React from 'react';

const Locationweather = ({
  temperature = 16,
  cityName = 'London',
  country = 'United Kingdom',
  timestamp = "06:09 - Monday, 9 Sep '23",
}) => {
  return (
    <div className='flex flex-col justify-between w-full lg:h-full lg:m-0 mb-40 h-full text-white'>
      <div className='sm:text-3xl text-xl  m-8 '>
        <h1>{country}</h1>
      </div>
      <div className=' flex flex-row p-8 gap-2'>
        <h1 className='sm:text-9xl text-7xl'>{temperature}<sup className='sm:text-6xl text-4xl font-semibold relative' style={{ top: '-1em' }}>o</sup>
        </h1>
        <div className='self-center'>
          <h1 className='sm:text-6xl text-4xl '>{cityName}</h1>
          <h1 className='text-center sm:text-lg text-sm'>{timestamp}</h1>
        </div>
        <i className="fa-solid fa-cloud sm:text-6xl text-4xl p-4"></i>
      </div>
    </div>
  );
}

export default Locationweather;
