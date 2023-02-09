import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    
    const personObj = {
      name: newName
    }

   if(persons.find(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)
    return
   }


    setPersons([...persons, personObj])
    setNewName('')

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleDoubleName = () => {
    alert(`${newName} is already added`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          onChange={handleNameChange}
          value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
 
      return <p key={person.name}>{person.name}</p>}
      )}
        
    </div>
  )

}

export default App