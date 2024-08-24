import { USERSTATUS } from '@/app/constants';
import AnnouncementBoard from '@/app/ui/provider/home/announcement';
import Request from '@/app/ui/provider/home/request';
import StatusBar from '@/app/ui/provider/home/status';
import { announcements, requests } from './dummyData';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.leftSection}>
        <div className={styles.welcome}>
          <div className={styles.welcomeText}>
            <h1>Welcome,</h1>
            <h2>Dr. Johnson</h2>
          </div>
          <div className={styles.statusBox}>
            <StatusBar status={USERSTATUS.ONLINE} />
          </div>
        </div>
        <div style={{ fontSize: 25, textAlign: 'center' }}>Announcement:</div>
        <div className={styles.announcement}>
          <AnnouncementBoard announcements={announcements} />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div style={{ marginTop: 10, marginBottom: 10, fontSize: 30, textAlign: 'center' }}>
          Current Waitlist
        </div>
        <div className={styles.waitlist}>
          {requests.map((req, index) => (
            <Request key={index} {...req} />
          ))}
        </div>
      </div>
    </main>
  );
}
