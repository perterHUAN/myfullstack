import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  const course = {
    name:'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 144
      }

    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content 
        parts={course.parts}
        />
      <Total number={course.parts.reduce((pre, cur) => pre + cur.exercises, 0)}/>
    </div>
  );
}

export default App;
