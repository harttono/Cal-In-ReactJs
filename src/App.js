import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App() {
  const [tapped,setTapped]=useState(false);
  const [number1,setNumber1] = useState(undefined);
  const [number2,setNumber2] = useState(undefined);
  const [number3,setNumber3] = useState(undefined);
  const [result,setResult] = useState(undefined);

  useEffect( () =>{
      return () =>{
        setResult(0)
      }
  },[])

  const add = () => {
    if(tapped == false){
      alert(`click checkbox ${`untuk mengaktifkan angka`}`)
    }else{
      setResult( Number(number1)+Number(number2)+Number(number3))
    }
  }

  const subtract = () =>{
    if(tapped == false){
      alert(`click checkbox ${`untuk mengaktifkan angka`}`)
    }else{
      setResult(Number(number1)-Number(number2)-Number(number3))
    }
  }

  const multiple = () =>{
    if(tapped == false){
      alert(`click checkbox ${`untuk mengaktifkan angka`}`)
    }else{
      setResult(Number(number1)*Number(number2)*Number(number3))  
    }
  }

  const devided = () =>{
    if(tapped == false){
      alert(`click checkbox ${`untuk mengaktifkan angka`}`)
    }else{
      setResult(Number(number1)/Number(number2)/Number(number3))
    }
  }

  const tap = (e) => {
    setTapped(e)
  }
  return (
    <div className="App-header">
      <p>
        Kalkulator
      </p>
      <form className="cal-style">
        <div className="field">
          <input type="text" id="num1" onChange={ (e) => setNumber1(e.target.value) }/>
          <input type="checkbox" onClick={ (e) => tap(e.target.checked)}/>
        </div>
        <div className="field">
          <input type="text" onChange={ (e) => setNumber2(e.target.value) } 
           />
          <input type="checkbox" onClick={ (e) => tap(e.target.checked)}/>
        </div>
        <div className="field">
          <input type="text" id="num3" onChange={ (e) => setNumber3(e.target.value)} />
          <input type="checkbox" onClick={ (e) => tap(e.target.checked)}/>
        </div>
        <div className="field">
          <button type="button" onClick={ () => add()}>+</button>
          <button type="button" onClick={ () => subtract()}>-</button>
          <button type="button" onClick={ () => multiple()}>x</button>
          <button type="button" onClick={ () => devided()}>/</button>
        </div>
        <hr/>
        <div className="results">
          <label>Hasil</label>
          <label>{result ? result : 0}</label>
        </div>
      </form>
    </div>
  );
}

export default App;
