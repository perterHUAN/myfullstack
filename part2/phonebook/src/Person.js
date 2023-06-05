function Person({persons,  newFilter}){
    return (
      <ul>
        {persons.filter(item => newFilter === ''? true : item.name.toLowerCase() === newFilter).map(item => 
          <li key={item.name}>{item.name} {item.phone}</li>
          )}
      </ul>
    )
}
export default Person;