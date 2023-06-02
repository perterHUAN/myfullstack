import Part from "./Part";
function Content(props) {
    return (
        props.parts.map((item)  => {
            return <Part part={item.name} exercise={item.exercises} />
        })        
    );
}
export default Content;