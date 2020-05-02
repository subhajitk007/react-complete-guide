// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
// import Post from './Post/Post';

// class app extends Component {
//this is the example of react hooks by using react hooks we can manage state inside the functional component
//limitations are :
// 1 > In the class based components easily the state managed suppose there is two states in the
// class based components persons and otherState by changing the one state we can have other states
// data also available but in the React Hooks we dont automatically get that data for that we can have
// two ways to perform that



const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Subhajit', age: 26 },
      { name: 'Santu', age: 25 }
    ]
  });
// Or for using updating the otherState we need to follow this approach.
  const [otherState, setOtherState] = useState({
    others: [
      { specialmove: 'Sharingan', type: 'Friendly' },
      { specialmove: 'Byakugan', type: 'Rogue' }
    ]
  })
  console.log(personsState, otherState)

  const switchHandler = () => {
    //   // alert('Was clicked!!')
    setPersonsState({
      persons: [
        { name: 'XOXO', age: 100 },
        { name: 'LMAO', age: 10 }
      ]


    });

  };
  // state = {
  //   persons: [
  //     { name: 'Subhajit', age: 26 },
  //     { name: 'Santu', age: 25 }
  //   ],
  //in the react hooks for this state if we click on switch Handler it will only update the person properties for that we need to
  //update in the switchHandler that otherState :personsState.otherState in line 40
  //   otherState: 'New State'
  // }
  // switchHandler = () => {
  //   // alert('Was clicked!!')
  //   this.setState({
  //     persons: [
  //       { name: 'XOXO', age: 100 },
  //       { name: 'LMAO', age: 10 }
  //     ]


  //   })


  // render() {
  return (
    <div className="App">
      <h1>Subhajit</h1>
      <p>This is really cool stuff</p>
      {/* <button onClick = {this.switchHandler}>Switch</button> */}
      <button onClick={switchHandler}>Switch</button>
      <Person name="Mew2" age="100000000000" />
      {/* <Post tilte="My title" /> */}
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >A new day has come</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />

      {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>A new day has come</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} /> */}

    </div>
  );
  // return React.createElement('div', {className: 'App'},React.createElement('h1', null, 'My Name Is Subhajit'))
//specialmove={otherState.others[0].specialmove} type={otherState.others[0].type}

}

export default app;
