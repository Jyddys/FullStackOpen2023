const Persons = ({ searchResults, deletePerson}) => {
  return (
    <>
    {searchResults
    .map(person => {
    return (
      <li key={person.id}>
      <p style={{margin: 0, display: 'inline-block'}}key={person.name}>{person.name} {person.number}</p>
      <button style={{marginLeft: '10px'}} onClick={() => deletePerson(person.id)}>Delete</button>
      <br/>
      </li>
        )  
      }
    )}
    </>
  )
}

export default Persons