import { useState } from 'react'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Person from './Person'
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
        <Filter newFilter={newFilter} handleInputFilterChange={handleInputFilterChange}/>
        <h3>add a new</h3>
        <PersonForm 
          newName={newName}
          handleInputNameChange={handleInputNameChange}
          newPhone={newPhone}
          handleInputPhoneChange={handleInputPhoneChange}
          addPhoneEntry={addPhoneEntry}
        />
        <h2>Numbers</h2>
      <Person persons={persons} newFilter={newFilter}/>
      
    </div>
  )
}

export default App