import { Announcement } from '@/app/types';
import AnnouncementBoard from '@/app/ui/provider/home/announcement';
import styles from './page.module.css';

export default function Home() {
  // Dummy array of announcements
  const announcements: Announcement[] = [
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
      header: 'Health Screening and Flu Vaccination Drive',
      date: '11/25/2024',
      content:
        'In an effort to keep our community healthy during the flu season, we are hosting a free health screening and flu vaccination drive on December 10th from 9:00 AM to 6:00 PM. All are welcome to attend. We will be offering basic health check-ups, flu shots, and wellness consultations. Volunteers with medical training are especially needed to help administer vaccines and perform screenings.',
      author: 'Health Services Coordinator',
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

  return (
    <main className={styles.main}>
      <div className={styles.leftSection}>
        <div className={styles.welcome}>
          <h1>Welcome,</h1>
          <h2>Dr. Johnson</h2>
        </div>
        <div style={{ fontSize: 25, textAlign: 'center' }}>Announcement:</div>
        <div className={styles.announcement}>
          <AnnouncementBoard announcements={announcements} />
        </div>
      </div>

      <div className={styles.rightSection}>right</div>
    </main>
  );
}
