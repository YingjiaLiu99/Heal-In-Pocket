export type Announcement = {
  header: string;
  date: string;
  content: string;
  author: string;
};

export type RequestObject = {
  patientName: string;
  correspondingRecord: string;
  newPatient: boolean;
  chiefComplaint: string;
  createdAt: string;
};

export type RecordObject = {
  recordId: string;
  recordType: string; // define whether this is a vital-check-only record, or its a standard record
  smokingStatus: string;
  pregnancyStatus: string;
  chronicCondition: string;
  currentMedications: string;
  allergies: string;
  chiefComplaint: string;
  vitals: {
    temperature: number;
    systolicBloodPressure: number;
    diastolicBloodPressure: number;
    pulse: number;
    oxygen: number;
    glucose: number;
  };
  soap: {
    subjective: string;
    objective: string;
    assessment: string;
  };
  providerName: string;
  scribeName: string;
  owner: string; // reference to 'Patient'
  createdAt?: Date;
  updatedAt?: Date;
};
