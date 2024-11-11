"use client";
import { useState } from 'react';
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim()) {
            onSearch(searchQuery.trim());
        }
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        onSearch('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="relative flex items-center w-full max-w-sm">
            <Input
                className="pr-20 rounded-full border-2 border-purple-500 focus:border-purple-600 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                placeholder="Search articles..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            {searchQuery && (
                <Button
                    className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-1 text-purple-600 hover:text-purple-700"
                    size="icon"
                    variant="ghost"
                    onClick={handleClearSearch}
                >
                    <X className="w-4 h-4" />
                </Button>
            )}
            <Button
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700 focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                size="icon"
                onClick={handleSearch}
            >
                <Search className="w-4 h-4" />
                <span className="sr-only">Search</span>
            </Button>
        </div>
    );
};

export default SearchBar;