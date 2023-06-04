import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
function Course({ course }) {
    return (
        <>
            <Header courseName={course.name}/>
            <Content parts={course.parts}/>
            <Total sum={course.parts.reduce((pre, cur) => pre + cur.exercises, 0)}/>
        </>
        
    )
}

export default Course;