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
          <div className={styles.inputBoxContainer}>
            <label htmlFor="chiefComplaint" className={styles.label}>
              Chief Complaint
            </label>
            <textarea
              id="chiefComplaint"
              name="chiefComplaint"
              placeholder=""
              className={styles.inputBox}
              rows={4}
              defaultValue={record.chiefComplaint}
            />
          </div>

          <div className={styles.inputBoxContainer} style={{ backgroundColor: 'lightyellow' }}>
            <label htmlFor="subjective" className={styles.label}>
              Subjective
            </label>
            <textarea
              id="subjective"
              name="subjective"
              placeholder=""
              className={styles.inputBox}
              style={{ backgroundColor: 'lightyellow' }}
              rows={4}
            />
          </div>

          <div className={styles.inputBoxContainer}>
            <label htmlFor="chronicCondition" className={styles.label}>
              Chronic Condition
            </label>
            <textarea
              id="chronicCondition"
              name="chronicCondition"
              placeholder=""
              className={styles.inputBox}
              rows={2}
              defaultValue={record.chronicCondition}
            />
          </div>

          <div className={styles.inputBoxContainer}>
            <label htmlFor="med/allergy" className={styles.label}>
              Current Medication/Allergies
            </label>
            <textarea
              id="med/allergy"
              name="med/allergy"
              placeholder=""
              className={styles.inputBox}
              rows={2}
              defaultValue={`${record.currentMedications} [Allergies: ${record.allergies}]`}
            />
          </div>

          {/* vital grid */}
          <div style={{ width: '100%' }}>
            <div className={styles.vitalGrid}>
              <div className={styles.vitalBoxContainer}>
                <label htmlFor="temperature" className={styles.label}>
                  Temp
                </label>
                <textarea
                  id="temperature"
                  name="temperature"
                  placeholder=""
                  className={styles.vitalInputBox}
                  rows={1}
                  defaultValue={record.vitals.temperature}
                />
              </div>
              <div className={styles.vitalBoxContainer}>
                <label htmlFor="pulse" className={styles.label}>
                  Pulse
                </label>
                <textarea
                  id="pulse"
                  name="pulse"
                  placeholder=""
                  className={styles.vitalInputBox}
                  rows={1}
                  defaultValue={record.vitals.pulse}
                />
              </div>
              <div className={styles.vitalBoxContainer}>
                <label htmlFor="oxygen" className={styles.label}>
                  Oxygen
                </label>
                <textarea
                  id="oxygen"
                  name="oxygen"
                  placeholder=""
                  className={styles.vitalInputBox}
                  rows={1}
                  defaultValue={record.vitals.oxygen}
                />
              </div>
              <div className={styles.vitalBoxContainer}>
                <label htmlFor="glucose" className={styles.label}>
                  BG
                </label>
                <textarea
                  id="glucose"
                  name="glucose"
                  placeholder=""
                  className={styles.vitalInputBox}
                  rows={1}
                  defaultValue={record.vitals.glucose}
                />
              </div>
              <div className={styles.vitalBoxContainer}>
                <label htmlFor="systolicBloodPressure" className={styles.label}>
                  Sys BP
                </label>
                <textarea
                  id="systolicBloodPressure"
                  name="systolicBloodPressure"
                  placeholder=""
                  className={styles.vitalInputBox}
                  rows={1}
                  defaultValue={record.vitals.systolicBloodPressure}
                />
              </div>
              <div className={styles.vitalBoxContainer}>
                <label htmlFor="diastolicBloodPressure" className={styles.label}>
                  Dia BP
                </label>
                <textarea
                  id="diastolicBloodPressure"
                  name="diastolicBloodPressure"
                  placeholder=""
                  className={styles.vitalInputBox}
                  rows={1}
                  defaultValue={record.vitals.diastolicBloodPressure}
                />
              </div>
            </div>
          </div>

          <div className={styles.inputBoxContainer} style={{ backgroundColor: 'lightyellow' }}>
            <label htmlFor="objective" className={styles.label}>
              Objective
            </label>
            <textarea
              id="objective"
              name="objective"
              placeholder=""
              className={styles.inputBox}
              style={{ backgroundColor: 'lightyellow' }}
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
