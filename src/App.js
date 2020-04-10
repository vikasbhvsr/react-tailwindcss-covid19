import React from 'react';
import Countries from './components/Countries';
import Global from './components/Global';
import Header from './components/Header';

function App() {
  return (
    <div className='App font-sans antialiased bg-gray-100 px-6'>
      <Header />
      <Global />
      <Countries />
    </div>
  );
}

export default App;
