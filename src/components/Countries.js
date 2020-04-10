import React, { useState, useEffect } from 'react';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedValue, setSelectedValue] = useState('US');
  const [countryConfirmedValue, setCountryConfirmedValue] = useState([]);
  const [countryRecoveredValue, setCountryRecoveredValue] = useState([]);
  const [countryDeathsValue, setCountryDeathsValue] = useState([]);
  const [countryLastUpdated, setCountryLastUpdated] = useState([]);

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api/countries`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
      })
      .catch((error) => console.error(error));

    fetch(`https://covid19.mathdro.id/api/countries/${selectedValue}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryConfirmedValue(data.confirmed);
        setCountryRecoveredValue(data.recovered);
        setCountryDeathsValue(data.deaths);
        setCountryLastUpdated(data.lastUpdate);
      })
      .catch((error) => console.error(error));
  }, [selectedValue]);
  return (
    <div className='container mx-auto text-center'>
      <div className='my-8 flex lg:flex-row sm:flex-col flex-col justify-between items-center'>
        <h2 className='text-3xl font-bold text-left'>
          {selectedValue} Statistics
        </h2>
        <div className='relative'>
          <select
            className='appearance-none bg-indigo-100 border border-indigo-500 text-indigo-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-indigo-500'
            name='countries'
            onChange={(e) => setSelectedValue(e.currentTarget.value)}
          >
            {countries.map((country) => (
              <option value={country.name} key={country.iso2}>
                {country.name}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg
              className='fill-current h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
      </div>
      <div className='data'>
        <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 justify-center'>
          <div className='shadow-lg rounded-lg p-5 hover:shadow-xl bg-yellow-300 text-center'>
            <h2 className='uppercase text-lg font-bold text-xl tracking-normal pb-3'>
              Confirmed
            </h2>
            <span role='img' aria-label='sick' className='text-5xl'>
              🤢
            </span>
            <p className='text-5xl'>{countryConfirmedValue.value}</p>
          </div>
          <div className='shadow-lg rounded-lg p-5 hover:shadow-xl bg-green-300 text-center'>
            <h2 className='uppercase text-lg font-bold text-xl tracking-normal pb-3'>
              Recovered
            </h2>
            <span role='img' aria-label='sick' className='text-5xl'>
              👍🏾
            </span>
            <p className='text-5xl'>{countryRecoveredValue.value}</p>
          </div>
          <div className='shadow-lg rounded-lg p-5 hover:shadow-xl bg-red-300 text-center'>
            <h2 className='uppercase text-lg font-bold text-xl tracking-normal pb-3'>
              Deaths
            </h2>
            <span role='img' aria-label='sick' className='text-5xl'>
              👼
            </span>
            <p className='text-5xl'>{countryDeathsValue.value}</p>
          </div>
        </div>
        <div className='text-left my-4'>
          <small>Last Updated: {countryLastUpdated}</small>
        </div>
      </div>
    </div>
  );
}

export default Countries;
