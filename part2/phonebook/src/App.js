import { useState,useEffect } from 'react'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Person from './Person'
import axios from 'axios'
const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')


  useEffect(() => {
    console.log("get data")
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data);
      })
  }, [])

  const handleInputNameChange = (e) => {
    setNewName(e.target.value);
  } 
  const handleInputNumberChange = (e) => {
    setNewNumber(e.target.value);
  } 
  const handleInputFilterChange = (e) => {
    setNewFilter(e.target.value);
  } 
  const addPhoneEntry  = (e) => {
    e.preventDefault();
    if(persons.some(item => item.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }else {
     setPersons(persons.concat({ name: newName, number:newNumber}));
    }
    setNewName('');
    setNewNumber('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newFilter={newFilter} handleInputFilterChange={handleInputFilterChange}/>
        <h3>add a new</h3>
        <PersonForm 
          newName={newName}
          handleInputNameChange={handleInputNameChange}
          newNumber={newNumber}
          handleInputNumberChange={handleInputNumberChange}
          addPhoneEntry={addPhoneEntry} />
        <h2>Numbers</h2>
      <Person persons={persons} newFilter={newFilter}/>
      
    </div>
  )
}

export default App