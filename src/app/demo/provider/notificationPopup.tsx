import { useRef } from 'react';
import styles from './notificationPopup.module.css';

interface NotificationPopupProps {
  closePopup: () => void;
}

export default function NotificationPopupScreen({ closePopup }: NotificationPopupProps) {
  const modalRef = useRef(null);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      closePopup();
    }
  };

  return (
    <div className={styles.backdrop} ref={modalRef} onClick={handleOutsideClick}>
      <div className={styles.mainContainer}>
        <h1>Notification Inbox</h1>

        <div className={styles.message}>
          {`Patient John Doe's lab results are available for review. Please verify and add notes to the patient record.`}
        </div>
        <div className={styles.message}>
          {`You have a scheduled appointment with Patient Jane Smith at 2:30 PM today. Ensure all necessary documents are ready for the consultation.`}
        </div>
        <div className={styles.message}>
          {`Patient Mark Johnson has requested a renewal for his prescription of Metformin. Review the request and approve if appropriate.`}
        </div>
        <div className={styles.message}>
          {`Critical Alert: Patient Emily Davis's recent blood test shows dangerously high glucose levels. Immediate follow-up is recommended.`}
        </div>

        <div className={styles.button}>Clear All</div>
      </div>
    </div>
  );
}
