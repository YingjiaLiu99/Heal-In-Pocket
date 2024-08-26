import { RecordObject, Patient } from '@/app/demo/demo-types';
import Image from 'next/image';
import styles from './recordPopup.module.css';

type recordProps = {
  patient: Patient | null;
  record: RecordObject | null;
  handleClose: () => void;
};

const formatDate = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-based index
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

export default function RecordPopupWindow({ patient, record, handleClose }: recordProps) {
  if (!record || !patient) {
    return null;
  }
  return (
    <div className={styles.backdrop}>
      <div className={styles.mainContainer}>
        <div className={styles.closeButton}>
          <Image src="/icons/close.svg" width={30} height={30} alt="close" onClick={handleClose} />
        </div>

        <div className={styles.header}>
          <h1>{patient.name}</h1>
          <h2>
            {'DOB: '}
            {patient.DOB}
          </h2>
          <div className={styles.site}>
            <h2>{patient.lastSeen}</h2>
            <h2 style={{ marginLeft: 5 }}>
              {'['}
              {formatDate(record.updatedAt)}
              {']'}
            </h2>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <h1>Visit Note</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}
