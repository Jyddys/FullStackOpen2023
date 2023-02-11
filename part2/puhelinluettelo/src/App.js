import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    if(personObj.name.length === 0 || personObj.number.length === 0 ){
      alert("Add name and number")
      return
    }

   if(persons.find(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)
    return
   }

    personService
    .create(personObj)
    .then(initialPersons => {
      setPersons([...persons, initialPersons])
      setNewName('')
      setNewNumber('')
    })
    .catch((error) => {
      console.log(error)
    })  
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personToDelete.name} ?` )) {
    personService
    .deleteItem(id)
    .then(() => {
      setPersons(persons.filter((person) => person.id !== id))
    })
    .catch((error) => {
      console.log(error)
    })  
  }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const searchResults = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='container'>
      <h2>Phonebook</h2>
      <Filter 
        search={search}
        handleSearch={handleChange}
        />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
      searchResults={searchResults}
      deletePerson={deletePerson}
      />
      
        
    </div>
  )

}

export default App