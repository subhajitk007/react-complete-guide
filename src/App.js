import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
// import Post from './Post/Post';


//this is the example of react hooks by using react hooks we can manage state inside the functional component
//limitations are :
// 1 > In the class based components easily the state managed suppose there is two states in the
// class based components persons and otherState by changing the one state we can have other states
// data also available but in the React Hooks we dont automatically get that data for that we can have
// two ways to perform that



// const app = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Subhajit', age: 26 },
//       { name: 'Santu', age: 25 }
//     ]
//   });
// // Or for using updating the otherState we need to follow this approach.
//   const [otherState, setOtherState] = useState({
//     others: [
//       { specialmove: 'Sharingan', type: 'Friendly' },
//       { specialmove: 'Byakugan', type: 'Rogue' }
//     ]
//   })
//   console.log(personsState, otherState)

//   const switchHandler = () => {
//     //   // alert('Was clicked!!')
//     setPersonsState({
//       persons: [
//         { name: 'XOXO', age: 100 },
//         { name: 'LMAO', age: 10 }
//       ]


//     });

//   };
class app extends Component {
  state = {
    persons: [
      {id:'www', name: 'Subhajit', age: 26 },
      {id:'xxx', name: 'Santu', age: 25 },
      {id:'zzz', name: 'Baba', age:20 }
    ],
    //in the react hooks for this state if we click on switch Handler it will only update the person properties for that we need to
    //update in the switchHandler that otherState :personsState.otherState in line 40
    otherState: 'New State',
    showPersons: false

  }
  // switchHandler = () => {
  //   // alert('Was clicked!!')
  //   this.setState({
  //     persons: [
  //       { name: 'XOXO', age: 100 },
  //       { name: 'LMAO', age: 10 }
  //     ]


  //   })
  // }
  // Dynamic representation
  switchHandler = (newName) => {
    // alert('Was clicked!!')
    this.setState({
      persons: [
        { name: newName, age: 100 },
        { name: 'LMAO', age: 10 }
      ]


    })
  }
  // this is for two way binding
  nameHandler = (event, id) => {
    const personIndex = this.state.findIndex(p => {
      return p.id = id;
    });
    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons })
      //for flexible state change with map function we dont require to hard code persons in the new state
      // persons: [
      //   // here event refers to extract the obj target is inputbox and value is what ever we are typing
      //   //this shows us how we dynamically update something passing down event references and how we manage inputs
      //   { name: event.target.value, age: 100 },
      //   { name: 'LMAO', age: 10 }
      // ]



  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();//this can seperate the current state array into new one
    //we need to change the state immutably like we need to assign a new array and put the old array data in the new one we can
    //do it by slice and Spread operator.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }
  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    //Here we are doing the same thing toggling the div part with normal javascript and rendering it inside jsx with {} dynamically
    let togglePerson = null;
    if (this.state.showPersons) {
      togglePerson = (
        < div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              //adding key to the map so that react will understand that element is old or new
              key={person.id}
              changed={(event) => this.nameHandler(event, person.id)}/>
          })}

          {/* After mapping this part is no longer required
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchHandler.bind(this, 'Kai')}
            changed={this.nameHandler} >A new day has come
          </Person> */}
        </div>
      );
    }
    return (
      <div className="App"><h1>Subhajit</h1>
      <p>This is really cool stuff</p>
      {/* This is for hooks we dont have to include this as dumb component */}
      {/* <button onClick={switchHandler}>Switch</button> */}
      {/* <Post tilte="My title" /> */}
      {/* refering to the click prop */}
      {/* This is using hooks */}
      {/* <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >A new day has come</Person>
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age} /> */}
      {/* 1st approach of getting the data */}
      {/* <button onClick={this.switchHandler.bind(this, 'Tyson')}>Switch</button>  */}
      {/* Here this refers to the switch handled and arrow function is passing the object */}
        {/* <button  onClick={() => this.switchHandler('Max')}>Switch</button> */}
      {/* <Person name="Mew2" age="100000000000" /> */}
      {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} /> */}
        {/* Rendering Content Conditional we can do this by outsourcing method aswell with normal javascript
            there we don't require this kind of implementation*/}
        {/* {this.state.showPersons === true ? */}
            {/* < div >
              <Person */}
                {/* // this is we are passing down the obj
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                // we are using click property and by this keyword we are fetching the new data from switchHandler
                click={this.switchHandler.bind(this, 'Kai')}
                changed={this.nameHandler}>A new day has come
              </Person>
        </div> */}
            {/* : null
          } */}
        {/* We are passing the normal javascript togglePerson here */}
        <button  onClick={this.toggleHandler}>Switch</button>
        {togglePerson}
      </div>
    );
    // return React.createElement('div', {className: 'App'},React.createElement('h1', null, 'My Name Is Subhajit'))
    //specialmove={otherState.others[0].specialmove} type={otherState.others[0].type}

  }

}
export default app;
