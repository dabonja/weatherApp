import {useEffect } from 'react';
import './App.css';
import store from './reduxx/store';
import {searchInput} from './reduxx/actions';


var res = store.getState();
var a = res.text;
function App() {
  var unsubscribe = store.subscribe(()=>{
    console.log('Store changed!', store.getState());
  });

const apiKey = '0b954cce1d0c12addc70730fdab69502';
  const handleChange = (e)=>{
    store.dispatch(searchInput(e.target.value));
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(store.getState());
    
  }

  const getData = ()=>{
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
useEffect(()=>{
  
  getData();
  
},[a])


  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
       <input type="text" onChange={handleChange}/>
     </form>

     <div>{a}</div>
    </div>
  );
}

export default App;
