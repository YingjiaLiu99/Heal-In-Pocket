import { RequestObject } from '@/app/types';
import styles from './request.module.css';

type RequestProps = RequestObject & {
  handleClick: (id: string) => void;
};

export default function Request({
  patientName,
  correspondingRecord,
  newPatient,
  chiefComplaint,
  createdAt,
  handleClick,
}: RequestProps) {
  return (
    <div className={styles.requestContainer} onClick={() => handleClick(correspondingRecord)}>
      <h1>{chiefComplaint}</h1>
      <div className={styles.secondRow}>
        <h2>{patientName}</h2>
        <h2>{createdAt}</h2>
        {newPatient && <div className={styles.tag}>New Patient</div>}
      </div>
    </div>
  );
}
