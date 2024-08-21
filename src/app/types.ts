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
