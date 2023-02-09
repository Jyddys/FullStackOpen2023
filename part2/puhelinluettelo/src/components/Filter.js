
const Filter = ({ search, handleSearch}) => {
  return (
    <>
    filter shown with<input
          placeholder='search...'
          type="search"
          value={search}
          onChange={handleSearch}
          />
          </>
  )
}
export default Filter