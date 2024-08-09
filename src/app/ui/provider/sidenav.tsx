import Image from 'next/image';
import styles from './sidenav.module.css';

export default function SideNavigator() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <Image src="/HIP_logo_row.png" width={252} height={71} alt="logo" />
        </div>

        <div className={styles.middleSection}></div>

        <div className={styles.rightSection}>
          <div className={styles.notificationIcon}>
            <Image src="/notifications.svg" width={30} height={30} alt="notifications" />
          </div>
          <div className={styles.userIcon}>
            <Image src="/doctor_m.png" width={60} height={60} alt="user" />
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.sideButton}>
          <Image src="/home.svg" width={30} height={30} alt="home" />
        </div>
        <div className={styles.sideButton}>
          <Image src="/record.svg" width={30} height={30} alt="record" />
        </div>
        <div className={styles.sideButton}>
          <Image src="/chat.svg" width={30} height={30} alt="chat" />
        </div>
        <div className={styles.sideButton}>
          <Image src="/setting.svg" width={30} height={30} alt="settings" />
        </div>
      </div>
    </div>
  );
}
