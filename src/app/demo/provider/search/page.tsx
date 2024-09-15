'use client';

import SearchBar from './searchbar';
import styles from './page.module.css';

export default function SearchPage() {
  return (
    <div className={styles.main}>
      <SearchBar />
    </div>
  );
}
