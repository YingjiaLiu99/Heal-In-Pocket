import { Announcement, RequestObject } from '@/app/types';

// Dummy array of announcements
export const announcements: Announcement[] = [
  {
    header: 'Extended Clinic Hours for Winter',
    date: '11/15/2024',
    content:
      'As the colder months approach, we are extending our clinic hours to ensure that everyone has access to the care they need. Starting from December 1st, our clinic will be open from 8:00 AM to 8:00 PM on weekdays and from 9:00 AM to 5:00 PM on weekends. We encourage all volunteers to sign up for additional shifts if they are available.',
    author: 'Volunteer Coordination Team',
  },
  {
    header: 'Free Winter Clothing Distribution',
    date: '11/20/2024',
    content:
      'We are pleased to announce a special event for the distribution of winter clothing for our homeless community members. On December 5th, from 10:00 AM to 4:00 PM, we will be handing out coats, gloves, hats, and blankets at our outreach center. Volunteers are needed to assist with the distribution and to help organize the donations.',
    author: 'Community Outreach Team',
  },
  {
    header:
      'Important Notice: Major Updates to Our EHR System Including Enhanced Security Protocols, New User Interface Features, Extended Data Integration Capabilities, and Improved Performance Metrics to Better Serve Our Medical Outreach Initiatives',
    date: '11/22/2024',
    content:
      'We are excited to announce a significant update to our Electronic Health Record (EHR) system, which will include several new features and enhancements. These updates are designed to improve the security, usability, and performance of our system, ensuring that our medical outreach teams can operate more efficiently and effectively. Key updates include enhanced security protocols, a redesigned user interface, extended data integration capabilities, and improved performance metrics. We encourage all users to familiarize themselves with the new features and provide feedback to help us continue improving the system.',
    author: 'Technical Development Team',
  },
  {
    header: 'Free Meals During the Holidays',
    date: '12/01/2024',
    content:
      'We know the holidays can be a difficult time for many, so we are organizing free meals throughout December. Our outreach center will serve hot meals every day from December 15th to December 25th, from 12:00 PM to 2:00 PM. We are also collecting donations of non-perishable food items, which can be dropped off at the center anytime during business hours.',
    author: 'Meal Program Coordinator',
  },
  {
    header: 'Temporary Shelter and Warm Spaces Available',
    date: '12/05/2024',
    content:
      'We are opening temporary shelters and warm spaces for those in need during the coldest nights of the winter. Starting from December 10th, these shelters will be open from 6:00 PM to 8:00 AM daily. We are seeking volunteers to help manage the spaces, provide warm beverages, and offer companionship during the night. Please consider signing up for a shift to support this crucial initiative.',
    author: 'Shelter Operations Team',
  },
];

// Dummy array of requests
export const requests: RequestObject[] = [
  {
    patientName: 'Tom Reece',
    correspondingRecord: 'randomId1',
    newPatient: true,
    chiefComplaint: 'headache and wound infection',
    createdAt: '04:25pm',
  },
  {
    patientName: 'Jane Doe',
    correspondingRecord: 'randomId2',
    newPatient: false,
    chiefComplaint: 'chronic back pain',
    createdAt: '05:10pm',
  },
  {
    patientName: 'Jane Doe',
    correspondingRecord: 'randomId7',
    newPatient: false,
    chiefComplaint:
      'Patient is experiencing persistent, sharp chest pain that radiates to the left arm and neck, accompanied by shortness of breath, dizziness, and episodes of profuse sweating. The patient reports that the pain intensifies with physical activity and subsides slightly with rest. Additionally, there has been a noticeable increase in heart palpitations and fatigue over the past week. The patient is also experiencing occasional episodes of nausea and a general feeling of unease, raising concerns about potential cardiac issues.',
    createdAt: '08:30am',
  },
  {
    patientName: 'Alice Johnson',
    correspondingRecord: 'randomId4',
    newPatient: false,
    chiefComplaint: 'skin rash',
    createdAt: '07:45pm',
  },
  {
    patientName: 'Robert Brown',
    correspondingRecord: 'randomId5',
    newPatient: true,
    chiefComplaint: 'shortness of breath',
    createdAt: '08:30pm',
  },
  {
    patientName: 'Emily Davis',
    correspondingRecord: 'randomId6',
    newPatient: false,
    chiefComplaint: 'joint pain',
    createdAt: '09:15pm',
  },
  {
    patientName: 'Michael Wilson',
    correspondingRecord: 'randomId7',
    newPatient: true,
    chiefComplaint: 'abdominal pain',
    createdAt: '10:05pm',
  },
  {
    patientName: 'Sarah Lee',
    correspondingRecord: 'randomId8',
    newPatient: false,
    chiefComplaint: 'migraines',
    createdAt: '10:45pm',
  },
  {
    patientName: 'David Harris',
    correspondingRecord: 'randomId9',
    newPatient: true,
    chiefComplaint: 'chest pain',
    createdAt: '11:30pm',
  },
  {
    patientName: 'Olivia Martinez',
    correspondingRecord: 'randomId10',
    newPatient: false,
    chiefComplaint: 'dizziness',
    createdAt: '12:15am',
  },
  {
    patientName: 'James Clark',
    correspondingRecord: 'randomId11',
    newPatient: true,
    chiefComplaint: 'fatigue and weakness',
    createdAt: '01:00am',
  },
  {
    patientName: 'Sophia Rodriguez',
    correspondingRecord: 'randomId12',
    newPatient: false,
    chiefComplaint: 'allergic reaction',
    createdAt: '01:45am',
  },
];
