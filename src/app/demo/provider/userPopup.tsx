import { useEffect, useRef } from 'react';
import styles from './userPopup.module.css';

interface UserPopupProfileProps {
  closePopup: () => void;
}

export default function UserPopupProfile({ closePopup }: UserPopupProfileProps) {
  const modalRef = useRef(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      closePopup();
    }
  };

  return (
    <div className={styles.backdrop} ref={modalRef} onClick={handleOutsideClick}>
      <div className={styles.mainContainer}>
        <h1>Provider Name: Dr. Emily Johnson</h1>
        <h1>Email: emily.johnson@example.com</h1>
        <h1>Phone Number: (555) 123-xxxx</h1>
        <h1 style={{ marginBottom: '20px' }}>Status: Online</h1>

        <div className={styles.button1}>View Your Profile</div>
        <div className={styles.button2}>Log Out</div>
      </div>
    </div>
  );
}
