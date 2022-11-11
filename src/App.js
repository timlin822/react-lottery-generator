import {useState} from 'react';

import LotteryForm from 'components/lottery/LotteryForm';
import LotteryList from 'components/lottery/LotteryList';

import './App.css';

function App() {
  const [error,setError]=useState("");
  const [inputNumber,setInputNumber]=useState(1);
  const [lotterySets,setLotterySets]=useState([]);
  
  const changeHandler=(e)=>{
    setError("");
    setLotterySets([]);

    setInputNumber(e.target.value);
  };

  const clickHandler=()=>{
    if(!inputNumber){
      return setError("請輸入數字");
    }
    if(inputNumber<1){
      return setError("請輸入大於1的數字");
    }

    let set=[];
    let sets=[];
    for(let i=0;i<inputNumber;i++){
      for(let j=0;j<6;j++){
        const random=Math.floor(Math.random()*50)+1; // 1~50的數字
        if(set.indexOf(random)===-1) set.push(random); // 避免重複的數字
        else j--;
      }
      sets.push(set);
      if(set.length===6) set=[];
    }
    setLotterySets(sets);
  };

  const resetHandler=()=>{
    setError("");
    setInputNumber(1);
    setLotterySets([]);
  };

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="lottery-flex">
          <LotteryForm error={error} inputNumber={inputNumber} setError={setError} changeHandler={changeHandler} clickHandler={clickHandler} resetHandler={resetHandler} />
          <LotteryList lotterySets={lotterySets} />
        </div>
      </div>
    </section>
  );
}

export default App;