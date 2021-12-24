import './App.css';
import Headers from './components/Headers';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Characters from './components/Characters';

function App() {
  const [items, setItems] =useState([])

  useEffect( () => {
    const fetchItems = async () => {
     const res = await axios('https://thronesapi.com/api/v2/Characters')
     setItems(res.data)
    }

    fetchItems()

      
  }, [])
  return (
    <div className="container">
    <Headers />
    <Characters items = {items} />
    </div>
  );
}

export default App;
