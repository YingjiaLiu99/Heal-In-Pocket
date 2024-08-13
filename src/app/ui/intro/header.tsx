import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <Link href="/" style={{ display: 'flex' }}>
          <Image
            src="/HIP_logo_row.png"
            width={249}
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
        </Link>
      </div>

      <div className={styles.middleSection}>
        <div className={styles.menu}>
          <Link href="/about">About Us</Link>
        </div>
        <div className={styles.menu}>
          <Link href="/projects">Projects</Link>
        </div>
        <div className={styles.menu}>
          <Link href="/get-involved">Get Involved</Link>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.openButton}>
          <Link href="/login">Open Heal in Pocket</Link>
        </div>
      </div>
    </div>
  );
}
