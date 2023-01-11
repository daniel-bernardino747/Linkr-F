import React, { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export function SearchProvider({ children }) {
  const [searchResults, setSearchResults] = useState('')

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  return useContext(SearchContext)
}
export default SearchContext
