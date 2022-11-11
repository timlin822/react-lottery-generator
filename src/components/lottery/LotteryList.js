import './Lottery.css';

const LotteryList=({lotterySets})=>{
    return (
		<div className="lottery-list">
            {lotterySets && lotterySets.map((sets,index)=>(
                <div key={index} className="lottery-set">{sets.map(number=><span key={number} className="ball">{number}</span>)}</div>
            ))}
        </div>
    );
}

export default LotteryList;