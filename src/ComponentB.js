


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


