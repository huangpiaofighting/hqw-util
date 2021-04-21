import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { getWeather } from '@/weather';

function Test() {
  const [city, setCity] = useState('test');
  getWeather().then((res) => {
    setTimeout(() => {
      console.log('res.city', res.city);
      setCity(res.city);
    }, 3000);
  });
  return (
    <>
      <div>
        {city}
        {'thisis city'}
      </div>
    </>
  );
}

ReactDOM.render(<Test />, document.getElementById('root'));
