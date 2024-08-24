import { RecordObject } from '@/app/types';
import styles from './recordPopup.module.css';

type recordProps = {
  record: RecordObject | null;
};

export default function RecordPopupWindow({ record }: recordProps) {
  if (!record) {
    return null;
  }
  return (
    <div className={styles.backdrop}>
      <div className={styles.mainContainer}>
        <h1>{record.chiefComplaint}</h1>
      </div>
    </div>
  );
}
