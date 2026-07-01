import { useState, useEffect } from 'react'
import useDebounce from './useDebounce'

const names = ["Rohan", "Rahul", "Priya", "Anjali", "Siddharth", "Aman"]

export default function SearchInput() {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 500)
  const [results, setResults] = useState(names)

  useEffect(() => {
    const filtered = names.filter(name => 
      name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    setResults(filtered)
  }, [debouncedSearch])

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search names..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Searching for: {debouncedSearch}</p>
      {results.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  )
}