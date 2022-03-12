import './App.css';
import Person from './components/person';

function App() {
  return (
    <div className="App">
      <Person 
        firstname = {'Drake'} 
        lastname = {'Graham'} 
        age ={35} 
        hair = {'black'}/>
      <Person 
        firstname = {'Ryan'} 
        lastname = {'Santiago'} 
        age ={29} 
        hair = {'Dark Brown'}/>
      <Person 
        firstname = {'Naruto'} 
        lastname = {'Uzumaki'} 
        age ={33} 
        hair = {'Blonde'}/>
      <Person 
        firstname = {'Jon'} 
        lastname = {'Snow'} 
        age ={25} 
        hair = {'Black'}/>
    </div>
  );
}

export default App;
