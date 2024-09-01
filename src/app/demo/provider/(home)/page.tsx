'use client';

import { useState, useEffect } from 'react';
import { USERSTATUS } from '@/app/constants';
import { RecordObject, Patient } from '@/app/demo/demo-types';
import AnnouncementBoard from '@/app/ui/provider/home/announcement';
import StatusBar from '@/app/ui/provider/home/status';
import { announcements, requests, records, patients } from './dummyData';
import RecordPopupWindow from './recordPopup';
import Request from './request';
import styles from './page.module.css';

export default function Home() {
  const [recordOpen, setRecordOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<RecordObject | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);

  const handleClickRequest = (id: string) => {
    setRecordOpen(true);
    const record = records.find((record) => record.recordId === id) || null;
    setSelectedRecord(record);
    const pid = record?.owner;
    const patient = patients.find((patient) => patient.pid === pid) || null;
    setPatient(patient);
  };

  const handleCloseRecord = () => {
    setRecordOpen(false);
  };

  useEffect(() => {
    if (recordOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [recordOpen]);

  return (
    <main className={styles.main}>
      <div className={styles.leftSection}>
        <div className={styles.welcome}>
          <div className={styles.welcomeText}>
            <h1>Welcome,</h1>
            <h2>Dr. Johnson</h2>
          </div>
          <div className={styles.statusBox}>
            <StatusBar status={USERSTATUS.ONLINE} />
          </div>
        </div>
        <div style={{ fontSize: 25, textAlign: 'center' }}>Announcement:</div>
        <div className={styles.announcement}>
          <AnnouncementBoard announcements={announcements} />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div style={{ marginTop: 15, marginBottom: 10, fontSize: 30, textAlign: 'center' }}>
          Current Waitlist
        </div>
        <div className={styles.waitlist}>
          {requests.map((req, index) => (
            <Request key={index} {...req} handleClick={handleClickRequest} />
          ))}
        </div>
      </div>

      {recordOpen && (
        <RecordPopupWindow
          patient={patient}
          record={selectedRecord}
          handleClose={handleCloseRecord}
        />
      )}
    </main>
  );
}
