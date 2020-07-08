import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';

function App() {

  const [todoListState, setTodoListState] = useState([
    {title: 'eat a banana', description: 'this morning i want to eat a banana'},
    {title: 'walk the dog', description: 'at 2:30 take the dog for a walk'},
    {title: 'mow the lawn', description: 'saturday morning, before it gets hot, mow a nd weed eat the lawn'},
    {title: 'study Java', description: 'today at some point continue your udemy java course'},
    {title: 'irhghrgtirjg', description: 'kohef9ihfheihefihefihefiheroiuhwfouhwrg'},
    {title: 'hellos ', description: 'girgihrgihrgihsrgsrgnosrgnr'},
    {title: 'side hustle', description: 'i wonder how i\'m going to have the layout adapt dynamicly to the content'},
    {title: 'eat a banana, eat a banana, eat a banana', description: 'this morning i want to eat a banana'},
    {title: 'mow the dog', description: 'at 2:30 take the dog for a walk'},
    {title: 'walk the java', description: 'saturday morning, before it gets hot, mow a nd weed eat the lawn'},
    {title: 'study the lawn', description: 'today at some point continue your udemy java course'},
    {title: 'i want a popsicle', description: 'kohef9ihfheihefihefihefiheroiuhwfouhwrg'},
    {title: 'hellos', description: 'girgihrgihrgihsrgsrgnosrgnr'},
    {title: 'side hustle', description: 'i wonder how i\'m going to have the layout adapt dynamicly to the content'}
  ]);
  
  
  return (
    <div className="App">
      <Header/>
      <Tasks todoList={todoListState}/>
      <Footer/>
    </div>
  );
}

export default App;
