'use client'

import { useState, useEffect, useCallback } from 'react'
import { Input } from "@/src/components/ui/input"
import { Button } from "@/src/components/ui/button"
import { Search, X } from 'lucide-react'
import { useDebounce } from '@/src/hooks/useDebounce'

interface SearchBarProps {
  onSearch: (query: string) => void
  initialQuery?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialQuery = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const debouncedSearchQuery = useDebounce(searchQuery, 300)

  const handleSearch = useCallback(() => {
    const trimmedQuery = searchQuery.trim()
    onSearch(trimmedQuery)
  }, [searchQuery, onSearch])

  const handleClearSearch = useCallback(() => {
    setSearchQuery('')
    onSearch('')
  }, [onSearch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    }
  }

  useEffect(() => {
    handleSearch()
  }, [debouncedSearchQuery, handleSearch])

  return (
    <div className="relative flex items-center w-full max-w-2xl mx-auto">
      <Input
        className="pr-20 rounded-full border-2 border-blue-500 focus:border-purple-500 focus:ring focus:ring-purple-300 focus:ring-opacity-50 transition-all duration-300 bg-gray-900 bg-opacity-50 text-white placeholder-gray-400"
        placeholder="Search for cutting-edge articles..."
        type="search"
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {searchQuery && (
        <Button
          className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:text-white transition-colors duration-300"
          size="icon"
          variant="ghost"
          onClick={handleClearSearch}
        >
          <X className="w-4 h-4" />
        </Button>
      )}
      <Button
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring focus:ring-purple-300 focus:ring-opacity-50 transition-all duration-300"
        size="icon"
        onClick={handleSearch}
      >
        <Search className="w-4 h-4" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  )
}

export default SearchBar

