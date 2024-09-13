'use client';

import { useState } from 'react';
import { Announcement } from '@/app/demo/demo-types';
import Image from 'next/image';
import styles from './announcement.module.css';

interface AnnouncementBoardProps {
  announcements: Announcement[];
}

export default function AnnouncementBoard({ announcements }: AnnouncementBoardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === announcements.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.showcase}>
      <div className={styles.announcementBox}>
        <h1 className={styles.header}>{announcements[currentIndex].header}</h1>
        <h2 className={styles.date}>{announcements[currentIndex].date}</h2>
        <p className={styles.content}>{announcements[currentIndex].content}</p>
        <p className={styles.author}>- {announcements[currentIndex].author}</p>
      </div>
      <div className={styles.buttonContainer}>
        <svg
          className={styles.navButton}
          onClick={handlePrev}
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>

        <div className={styles.indexBox}>{currentIndex + 1}</div>

        <svg
          className={styles.navButton}
          onClick={handleNext}
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>
    </div>
  );
}
