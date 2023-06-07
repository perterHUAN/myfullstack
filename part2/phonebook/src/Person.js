function Person({persons,  newFilter, handleDelete}){
    const t = newFilter.toLowerCase();
    return (
      <ul>
        {persons.filter(item => {
          return newFilter === ''? true : item.name.toLowerCase() === t
        }).map(item => 
          <li key={item.name}>{item.name} {item.number}<button onClick={() => {
            if(window.confirm(`delet ${item.name}`))
              handleDelete(item)
            }
          }>delete</button></li>
          )}
      </ul>
    )
}
export default Person;