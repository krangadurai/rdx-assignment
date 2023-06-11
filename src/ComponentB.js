// ComponentB.js

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateValue } from './app/storeAction';
// const ComponentB = ({ updateValue }) => {
//   const [value, setValue] = useState('');
//   const dispatch = useDispatch()
//   const handleChange = (event) => {
//     const { value } = event.target;
//     setValue(value);
//     dispatch(updateValue()); // Dispatch action to update the value in Redux store
//   }

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//     </div>
//   );
// }


import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from './app/reducer';

const ComponentB =() =>{
     const dispatch = useDispatch();
    const handleChange = (event) => {
        const { value } = event.target;
        // this.props.setValue(value);
        dispatch(setValue(value))
    };
  
    return (
      <div>
        <input type="text" onChange={handleChange} />
      </div>
    );
}



export default ComponentB;


