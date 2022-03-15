import './App.css';
import Person from './components/person';

function App() {
  return (
    <div className="App">
      <Person 
        firstname = {'Drake'} 
        lastname = {'Graham'} 
        birthday ={35} 
        hair = {'black'}
        intialstock ={60}/>
      <Person 
        firstname = {'Ryan'} 
        lastname = {'Santiago'} 
        birthday ={29} 
        hair = {'Dark Brown'}
        intialstock ={50}/>
      <Person 
        firstname = {'Naruto'} 
        lastname = {'Uzumaki'} 
        birthday ={33} 
        hair = {'Blonde'}
        intialstock ={42}/>
      <Person 
        firstname = {'Jon'} 
        lastname = {'Snow'} 
        birthday ={25} 
        hair = {'Black'}
        intialstock ={12}/>
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    </div>
  );
}

export default App;
