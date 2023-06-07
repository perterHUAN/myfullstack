import { useState,useEffect } from 'react'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Person from './Person'
import phoneServices from './services/phone'
import Notification from  './Notification'
import phone from './services/phone'
const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage]  = useState(null);

  useEffect(() => {
    console.log("get data")
    phoneServices
      .getAll()
      .then(response => {
        setPersons(response);
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

  const handleDelete = (phoneEntry) => {
    phoneServices.deleteP(phoneEntry.id)
      .then(r => setPersons(persons.filter(item => item.id != phoneEntry.id)))
      .catch(r => { 
        console.log("catch")
        setMessage(`Information for ${phoneEntry.name} has already been removed from server`)
        setPersons(persons.filter(item => item.name != phoneEntry.name))
        setTimeout(() => setMessage(null), 2000)
        
      }
     )

  }
  const addPhoneEntry  = (e) => {
    e.preventDefault();
    if(persons.some(item => item.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook,replace the old number with a new one?`))
        phoneServices
          .update(persons.filter(item => item.name === newName)[0].id,{name: newName, number:newNumber})
          .then(r => setPersons(persons.filter(item => item.name != r.name).concat(r)))
          .catch(r => {
            setMessage(`Information for ${newName} has already been removed from server`)
            setPersons(persons.filter(item => item.name != newName))
            setTimeout(() => setMessage(null), 2000)
          })
          
    }else {
    phoneServices
      .create({name: newName, number:newNumber})
      .then(response => {
          setPersons(persons.concat(response))
          setMessage(`add ${newName}`)
          setTimeout(() => setMessage(null), 5000)
          
      })
    }
    setNewName('');
    setNewNumber('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={message}/>
        <Filter newFilter={newFilter} handleInputFilterChange={handleInputFilterChange}/>
        <h3>add a new</h3>
        <PersonForm 
          newName={newName}
          handleInputNameChange={handleInputNameChange}
          newNumber={newNumber}
          handleInputNumberChange={handleInputNumberChange}
          addPhoneEntry={addPhoneEntry} />
        <h2>Numbers</h2>
      <Person persons={persons} newFilter={newFilter} handleDelete={handleDelete}/>
      
    </div>
  )
}

export default App