

import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
const value = useSelector(state => state.app.value);
  return (
    <div>
      <p>Value from Redux store: {value}</p>
    </div>
  );
}

export default ComponentC;
