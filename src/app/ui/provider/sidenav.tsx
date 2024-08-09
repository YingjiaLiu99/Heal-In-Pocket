import Image from 'next/image';
import styles from './sidenav.module.css';

export default function SideNavigator() {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <Image src="/HIP_logo_row.png" width={320} height={90} alt="logo image" />
      </div>

      <div className={styles.middleSection}></div>

      <div className={styles.rightSection}>
        <div className={styles.notificationIcon}>
          <Image src="/notifications.svg" width={40} height={40} alt="notifications Icon" />
        </div>

        <div className={styles.userIcon}>user</div>
      </div>
    </div>
  );
}
