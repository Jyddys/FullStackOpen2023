const Persons = ({ searchResults}) => {
  return (
    <>
    {searchResults.map(person => {
    return (
      <p style={{margin: 0}}key={person.name}>{person.name} {person.number}</p> 
        )  
      }
    )}
    </>
  )
}

export default Persons