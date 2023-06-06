function Person({persons,  newFilter}){
    const t = newFilter.toLowerCase();
    return (
      <ul>
        {persons.filter(item => {
          return newFilter === ''? true : item.name.toLowerCase() === t
        }).map(item => 
          <li key={item.name}>{item.name} {item.number}</li>
          )}
      </ul>
    )
}
export default Person;