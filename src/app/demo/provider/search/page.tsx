'use client';

import { useState } from 'react';
import { patients, records } from '../../dummyData';
import SearchBar from './searchbar';
import styles from './page.module.css';

export default function SearchPage() {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<{
    patients: typeof patients;
    records: typeof records;
  }>({
    patients: [],
    records: [],
  });

  const handleSearch = (query: string) => {
    if (!query) {
      // Reset search results if the query is empty
      setSearchResults({ patients: [], records: [] });
      return;
    }
    const normalizedQuery = query.toLowerCase();
    const filteredPatients = patients.filter((patient) => {
      return (
        patient.name.toLowerCase().includes(normalizedQuery) ||
        patient.email.toLowerCase().includes(normalizedQuery) ||
        patient.phoneNumber.includes(normalizedQuery)
      );
    });
    const filteredRecords = records.filter((record) => {
      return (
        record.chiefComplaint.toLowerCase().includes(normalizedQuery) ||
        record.chronicCondition.toLowerCase().includes(normalizedQuery) ||
        record.providerName.toLowerCase().includes(normalizedQuery)
      );
    });

    setSearchResults({
      patients: filteredPatients,
      records: filteredRecords,
    });
  };

  const highlightMatch = (text: string, query: string) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1 || !query) {
      return text;
    }
    const beforeMatch = text.substring(0, index);
    const match = text.substring(index, index + query.length);
    const afterMatch = text.substring(index + query.length);
    return (
      <>
        {beforeMatch}
        <span className={styles.highlight}>{match}</span>
        {afterMatch}
      </>
    );
  };

  return (
    <div className={styles.main}>
      {/* search bar: */}
      <div className={styles.searchBarContainer}>
        <SearchBar onSearch={handleSearch} query={query} setQuery={setQuery} />
      </div>
      {/* search result: */}
      {query && (
        <div className={styles.resultMain}>
          <div className={styles.patientResultContainer}>
            {searchResults.patients.length > 0 ? (
              <div style={{ width: '100%' }}>
                <h1 style={{ fontSize: 22, fontWeight: 400, marginBottom: '5px' }}>
                  Patient Result
                </h1>
                {searchResults.patients.map((patient) => (
                  <div key={patient.pid} className={styles.patientLine}>
                    <p>
                      {highlightMatch(patient.name, query)} - {highlightMatch(patient.email, query)}{' '}
                      - {highlightMatch(patient.phoneNumber, query)}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noResult}>
                <p style={{ fontSize: 20, fontWeight: 400 }}>No Matched Patients Found</p>
              </div>
            )}
          </div>

          <div className={styles.recordResultContainer}>
            {searchResults.records.length > 0 ? (
              <div style={{ width: '100%' }}>
                <h1 style={{ fontSize: 22, fontWeight: 400, marginBottom: '5px' }}>
                  Record Result
                </h1>
                {searchResults.records.map((record) => (
                  <div key={record.recordId} className={styles.recordLine}>
                    <p>
                      Chief Complaint: {highlightMatch(record.chiefComplaint, query)}, Date:{' '}
                      {record.updatedAt.toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noResult}>
                <p style={{ fontSize: 20, fontWeight: 400 }}>No Matched Records Found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
