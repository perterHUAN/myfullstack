import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleInputNameChange = (e) => {
    setNewName(e.target.value);
  } 
  const handleInputPhoneChange = (e) => {
    setNewPhone(e.target.value);
  } 
  const handleInputFilterChange = (e) => {
    setNewFilter(e.target.value.toLowerCase());
  } 
  const addPhoneEntry  = (e) => {
    e.preventDefault();
    if(persons.some(item => item.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }else {
     setPersons(persons.concat({ name: newName, phone:newPhone}));
    }
    setNewName('');
    setNewPhone('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with: <input value={newFilter} onChange={handleInputFilterChange}/>
        </div>
      <form>
        <h3>add a new</h3>
        <div>
          name: <input value={newName} onChange={handleInputNameChange}/>
        </div>
        <div>
          phone: <input value={newPhone} onChange={handleInputPhoneChange}/>
        </div>
        <div>
          <button type="submit" onClick={addPhoneEntry}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(item => newFilter === ''? true : item.name.toLowerCase() === newFilter).map(item => 
          <li key={item.name}>{item.name} {item.phone}</li>
          )}
      </ul>
      
    </div>
  )
}

export default App