'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './searchbar.module.css';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (query: string) => void;
}

export default function SearchBar({ query, setQuery, onSearch }: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    onSearch(searchQuery);
  };

  return (
    <div className={styles.boxContainer}>
      <input
        className={styles.searchBar}
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search patients or records..."
      />
      <div className={styles.icon}>
        <Image src="/icons/search.svg" width={30} height={30} alt="search" />
      </div>
    </div>
  );
}
