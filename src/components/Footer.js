import React from 'react';

function Footer() {
  return (
    <footer className='py-4 text-center border-t border-indigo-500 leading-loose'>
      <p>
        API{' '}
        <a
          className='text-indigo-500'
          href='https://github.com/mathdroid/covid-19-api'
          target='_blank'
        >
          mathroid/covid-19-api
        </a>
      </p>
      <p>
        Made with ❤ by
        <a
          className='text-indigo-500'
          href='https://github.com/vikasbhvsr'
          target='_blank'
        >
          {' '}
          Vikas
        </a>
      </p>
    </footer>
  );
}

export default Footer;
