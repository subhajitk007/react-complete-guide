import React  from 'react';

const person = (props) => {
  console.log(props)
  return <div>
    <p>I am {props.name} my age is {props.age} a Software Developer and i got {Math.floor(Math.random() * 10)} years Experience more over i have {props.type} in type and {props.specialmove} power</p>
    <p>{props.children}</p>
  </div>
}

export default person;

