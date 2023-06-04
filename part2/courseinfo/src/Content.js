import Part from "./Part"
function Content({ parts }) {
    return (
        <>
            {parts.map(item => 
                <Part key={item.id} {...item}/>
            )}
        </>
    )
}
export default Content;