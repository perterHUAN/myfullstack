function Statistics({good, neutral, bad}) {
  const total = good + neutral + bad;
  const score = good - bad;
  const average = total === 0? 0: score / total;
  const positive = total === 0 ? 0 : good / total * 100; 
  if(total > 0) 
    return (
      <>
        <h1>Statistics</h1>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {total}</p>
        <p>average: {average}</p>
        <p>positive: {positive}%</p>
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