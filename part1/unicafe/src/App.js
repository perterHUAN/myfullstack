import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const score = good - bad;
  const average = total === 0? 0: score / total;
  const positive = total === 0 ? 0 : good / total * 100; 
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <table>
        <thead>
          <tr>
            <td colspan="2">Statics</td>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>good</td>
              <td>{good}</td>
          </tr>
          <tr>
              <td>neutral</td>
              <td>{neutral}</td>
          </tr>
          <tr>
              <td>bad</td>
              <td>{bad}</td>
          </tr>
          <tr>
              <td>total</td>
              <td>{total}</td>
          </tr>
          <tr>
              <td>average</td>
              <td>{average}</td>
          </tr>
          <tr>
              <td>positive</td>
              <td>{positive}%</td>
          </tr>
        </tbody>
      </table>

    </div>  
  );
}

export default App;
