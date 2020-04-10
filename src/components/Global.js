import React, { useState, useEffect } from 'react';

function App() {
  const [confirmed, setConfirmed] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [lastUpdated, setLastUpdated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://covid19.mathdro.id/api`)
      .then((response) => response.json())
      .then((data) => {
        setConfirmed(data.confirmed);
        setRecovered(data.recovered);
        setDeaths(data.deaths);
        setLastUpdated(data.lastUpdate);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className='container mx-auto text-center'>
      <h2 className='my-8 text-3xl font-bold text-left'>Global Statistics</h2>
      <div className='data'>
        <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 justify-center'>
          <div className='shadow-lg rounded-lg p-5 hover:shadow-xl bg-yellow-300 text-center'>
            <h2 className='uppercase text-lg font-bold text-xl tracking-normal pb-3'>
              Confirmed
            </h2>
            <span role='img' aria-label='sick' className='text-5xl'>
              🤢
            </span>
            <p className='text-5xl'>{confirmed.value}</p>
          </div>
          <div className='shadow-lg rounded-lg p-5 hover:shadow-xl bg-green-300 text-center'>
            <h2 className='uppercase text-lg font-bold text-xl tracking-normal pb-3'>
              Recovered
            </h2>
            <span role='img' aria-label='sick' className='text-5xl'>
              👍🏾
            </span>
            <p className='text-5xl'>{recovered.value}</p>
          </div>
          <div className='shadow-lg rounded-lg p-5 hover:shadow-xl bg-red-300 text-center'>
            <h2 className='uppercase text-lg font-bold text-xl tracking-normal pb-3'>
              Deaths
            </h2>
            <span role='img' aria-label='sick' className='text-5xl'>
              👼
            </span>
            <p className='text-5xl'>{deaths.value}</p>
          </div>
        </div>
        <div className='text-left my-4'>
          <small>Last Updated: {lastUpdated}</small>
        </div>
      </div>
    </div>
  );
}

export default App;
