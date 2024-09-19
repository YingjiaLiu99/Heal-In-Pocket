'use client';

import { useState } from 'react';
import { patients, records } from '../../dummyData';
import SearchBar from './searchbar';
import styles from './page.module.css';

export default function SearchPage() {
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

    // Normalize query for case-insensitive search
    const normalizedQuery = query.toLowerCase();

    // Filter patients based on the query
    const filteredPatients = patients.filter((patient) => {
      return (
        patient.name.toLowerCase().includes(normalizedQuery) ||
        patient.email.toLowerCase().includes(normalizedQuery) ||
        patient.phoneNumber.includes(normalizedQuery)
      );
    });

    // Filter records based on the query
    const filteredRecords = records.filter((record) => {
      return (
        record.chiefComplaint.toLowerCase().includes(normalizedQuery) ||
        record.chronicCondition.toLowerCase().includes(normalizedQuery) ||
        record.providerName.toLowerCase().includes(normalizedQuery)
      );
    });

    // Update search results
    setSearchResults({
      patients: filteredPatients,
      records: filteredRecords,
    });
  };

  return (
    <div className={styles.main}>
      <SearchBar onSearch={handleSearch} />

      <div>
        <h3>Patient Results</h3>
        {searchResults.patients.length > 0 ? (
          <ul>
            {searchResults.patients.map((patient) => (
              <li key={patient.pid}>
                {patient.name} - {patient.email} - {patient.phoneNumber}
              </li>
            ))}
          </ul>
        ) : (
          <p>No patients found</p>
        )}
      </div>

      <div>
        <h3>Record Results</h3>
        {searchResults.records.length > 0 ? (
          <ul>
            {searchResults.records.map((record) => (
              <li key={record.recordId}>
                Chief Complaint: {record.chiefComplaint}, Provider: {record.providerName}
              </li>
            ))}
          </ul>
        ) : (
          <p>No records found</p>
        )}
      </div>
    </div>
  );
}
