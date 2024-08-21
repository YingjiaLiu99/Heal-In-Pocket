'use client';

import { useState } from 'react';
import { RequestObject } from '@/app/types';
import styles from './request.module.css';

export default function Request(request: RequestObject) {
  return (
    <div className={styles.requestContainer}>
      <h1>{request.chiefComplaint}</h1>
      <div className={styles.secondRow}>
        <h2>{request.patientName}</h2>
        <h2>{request.createdAt}</h2>
        {request.newPatient && <div className={styles.tag}>New Patient</div>}
      </div>
    </div>
  );
}
