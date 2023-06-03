import StatisticLine from "./StatisticLine";
function Statistics({good, neutral, bad}) {
  const total = good + neutral + bad;
  const score = good - bad;
  const average = total === 0? 0: score / total;
  const positive = total === 0 ? 0 : good / total * 100; 
  if(total > 0) 
    return (
      <>
        <h1>Statistics</h1>
        <StatisticLine text='good' data={good} />
        <StatisticLine text='neutral' data={neutral}/>
        <StatisticLine text='bad' data={bad}/>
        <StatisticLine text='total' data={total}/>
        <StatisticLine text='average' data={average}/>
        <StatisticLine text='positive' data={positive}/>
      </>
    );
  
  return (
    <>
        <h1>Statistics</h1>
        <div>No feedback given</div>
    </>
  );
}
export default Statistics;