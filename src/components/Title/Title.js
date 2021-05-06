import React from 'react';
import './Title.css';

const Title = ({ children }) => (
  <h1 className='main__title'>
    {children}
  </h1>
);

export default Title;