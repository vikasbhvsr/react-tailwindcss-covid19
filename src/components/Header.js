import React from 'react';

function Header() {
  return (
    <div className='border-b border-indigo-500'>
      <h1 className='py-4 font-bold tracking-tight text-5xl text-center'>
        COVID<span className='text-indigo-500'>19</span>
        <br />
        Outbreak Statistics
      </h1>
    </div>
  );
}

export default Header;
