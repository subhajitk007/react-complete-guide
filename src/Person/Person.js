import React  from 'react';
import './Person.css';
const person = (props) => {
  console.log(props)
  return (
    <div className="Person">
    <p onClick={props.click}>I am {props.name} my age is {props.age} a Software Developer and i got
    {Math.floor(Math.random() * 10)} years Experience </p>
      {/* <p>{props.children}</p> */}
      Here on change
      <input type="text" onChange={props.changed} value={props.name}/>
  </div>
  )
}

export default person;

