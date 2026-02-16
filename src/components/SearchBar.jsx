import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchBar
