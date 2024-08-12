import Image from 'next/image';
import styles from './intro.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <Image
          src="/HIP_logo_row.png"
          width={252}
          height={70}
          priority
          alt="logo"
          className="hidden sm:block"
        />
        <Image
          src="/pure_logo.jpg"
          width={70}
          height={70}
          priority
          alt="logo"
          className="block sm:hidden"
        />
      </div>

      <div className={styles.middleSection}>
        <div className={styles.menu}>About Us</div>
        <div className={styles.menu}>Projects</div>
        <div className={styles.menu}>Get Involved</div>
        <div className={styles.menu}>Contact Us</div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.openButton}>Open Heal in Pocket</div>
        <div className={styles.menuButton}>
          <Image src="/menu.svg" width={30} height={30} alt="menu" />
        </div>
      </div>
    </div>
  );
}
