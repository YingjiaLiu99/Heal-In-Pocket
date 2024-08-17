import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <Link href="/" style={{ display: 'flex' }} prefetch={false}>
          <Image src="/HIP_logo_row.png" width={249} height={70} priority alt="logo" />
        </Link>
      </div>

      <div className={styles.middleSection}>
        <Link href="/about" prefetch={false}>
          <div className={styles.menu}>About Us</div>
        </Link>
        <Link href="/projects" prefetch={false}>
          <div className={styles.menu}>Projects</div>
        </Link>
        <Link href="/get-involved" prefetch={false}>
          <div className={styles.menu}>Get Involved</div>
        </Link>
      </div>

      <div className={styles.rightSection}>
        <Link href="/login" prefetch={false}>
          <div className={styles.openButton}>Open Heal in Pocket</div>
        </Link>
      </div>
    </div>
  );
}
