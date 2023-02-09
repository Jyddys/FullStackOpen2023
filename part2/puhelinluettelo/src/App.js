import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: "040-5565522"
  }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObj = {
      name: newName,
      number: newNumber
    }

   if(persons.find(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)
    return
   }


    setPersons([...persons, personObj])
    setNewName('')
    setNewNumber('')

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          onChange={handleNameChange}
          value={newName}/>
        </div>
        <div>
          number: <input
          onChange={handleNumberChange}
          value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
 
      return (
        <p key={person.name}>{person.name} {person.number}</p> 
      )
      }
      )}
        
    </div>
  )

}

export default App