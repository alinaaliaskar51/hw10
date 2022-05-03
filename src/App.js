
import { useState } from 'react';
import './App.css';
import DataList from './components/DataList';
import GetData from './components/GetData';



function App() {

  const [data, setData] = useState([])

  const addInpValToList = obj => {
    setData(prev => [...prev, obj])

  }
console.log();
  return (
    <div className="App">
     <GetData onAddInpValToList={addInpValToList} />
     {data.map((el) => {
       return (
         <DataList key={el.id} text={el.text} text2={el.text2} text3={el.text3}/>
       )
     })}
    </div>
  );
}

export default App;
