import React from 'react';

const Locationweather = ({
  temperature = 16,
  cityName = 'London',
  country = 'United Kingdom',
  timestamp = "06:09 - Monday, 9 Sep '23",
}) => {
  return (
    <div className='flex flex-col justify-between w-full lg:h-full lg:m-0 mb-40 h-full text-white'>
      <div className='sm:text-3xl text-xl sm:text-left text-center sm:m-2  my-6 sm:pl-4 '>
        <h1>{country}</h1>
      </div>
      <div className=' flex flex-row p-4 gap-1'>
        <h1 className='sm:text-8xl text-6xl'>{temperature}<sup className='sm:text-5xl text-3xl font-semibold relative' style={{ top: '-1em' }}>o</sup>
        </h1>
        <div className='self-center  text-center'>
          <h1 className='sm:text-5xl text-w-auto  text-4xl '>{cityName}</h1>
          <h1 className=' sm:text-lg py-2 text-sm'>{timestamp}</h1>
        </div>
        <i className="fa-solid fa-cloud sm:text-6xl  text-4xl p-"></i>
      </div>
    </div>
  );
}

export default Locationweather;
