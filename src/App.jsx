import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import todo from './todo'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'
import count from './Count'
import Count from './Count'
import User from './user'
import Friends from './Friends'


// http://localhost:5173/
function App() {

  const actor = ['Salman Khan', 'Sharuk Khan', 'Hrithik', 'tiger']
  const singer = [
    {name: 'arijit sign', age: 40, home: 'kalkata'},
    {name: 'neha kakkar', age: 30, home: 'dillih'},
    {name: 'tone kakkar', age: 35, home: 'india'}
  ]
  function Click(){
    prompt('How old are you?', )
  }
  const sum = (num) =>{
    alert('my age :' + num)
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Friends></Friends>

      <User></User>

      <Count></Count>

      <button onClick={Click}>Click Me</button>
      <button onClick={() => sum(18)}>sum</button>
      {
        actor.map(actor => <Actor name={actor} ></Actor>)
      }
      {
        singer.map(singer => <Singers name={singer.name} age={singer.age} home={singer.home}></Singers>)
      }
      
      <Todo task = 'learn React' isDone = {true}></Todo>
      <Todo task = 'Explore Core Concept' isDone = {false}></Todo>
      <Todo task = 'Try JSX' isDone = {true}></Todo>
      <Person></Person>
      <Student name="arman" class="13" age="18"></Student>
      <Student name="abir" class="12" age="15"></Student>
      <Student name="ariyan" class="9" age="12"></Student>
      

    </>
  )
}

function Person(){
  const stl = {
    border: "2px solid red",
    padding: '20px',
    margin: '20px',
    borderRadius: '15px'
  }
  const person ={name: "Arman", age: 18}
   
  return (
    <h1 style={stl}>My name is {person.name}. my age: {person.age}</h1>
  )
}


function Student(props){
  return(
    <div className='design'>
      <h1>my name: {props.name}</h1>
      <h2>class: {props.class}</h2>
      <h2>age: {props.age}</h2>
    </div>
  )
}
export default App
