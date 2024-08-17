import Image from 'next/image';
import Link from 'next/link';
import styles from './sidenav.module.css';

export default function SideNavigator() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <Link href="/provider-home" style={{ display: 'flex' }}>
            <Image src="/HIP_logo_row.png" width={249} height={70} alt="logo" priority />
          </Link>
        </div>

        <div className={styles.middleSection}></div>

        <div className={styles.rightSection}>
          <div className={styles.notificationIcon}>
            <Image src="/notifications.svg" width={30} height={30} alt="notifications" />
            <div className={styles.number}>3</div>
            <div className={styles.tooltip}>Notification</div>
          </div>
          <div className={styles.userIcon}>
            <Image src="/doctor_m.png" width={60} height={60} alt="user" />
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.sideButton}>
          <Image src="/home.svg" width={30} height={30} alt="home" />
          <div className={styles.iconName}>Home</div>
        </div>
        <div className={styles.sideButton}>
          <Image src="/record.svg" width={30} height={30} alt="record" />
          <div className={styles.iconName}>Record</div>
        </div>
        <div className={styles.sideButton}>
          <Image src="/search.svg" width={30} height={30} alt="search" />
          <div className={styles.iconName}>Search</div>
        </div>
        <div className={styles.sideButton}>
          <Image src="/chat.svg" width={30} height={30} alt="chat" />
          <div className={styles.iconName}>Chat</div>
        </div>
        <div className={styles.sideButton}>
          <Image src="/setting.svg" width={30} height={30} alt="settings" />
          <div className={styles.iconName}>Settings</div>
        </div>
      </div>
    </div>
  );
}
