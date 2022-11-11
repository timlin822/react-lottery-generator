import Error from 'components/error/Error';

import './Lottery.css';

const LotteryForm=({error,inputNumber,setError,changeHandler,clickHandler,resetHandler})=>{
    return (
		<div className="lottery-form">
            {error && <Error error={error} setError={setError} />}
            <input type="number" className="input" value={inputNumber} onChange={changeHandler} />
            <button className="btn" onClick={clickHandler}>隨機選號</button>
            <button className="btn" onClick={resetHandler}>清除</button>
        </div>
    );
}

export default LotteryForm;