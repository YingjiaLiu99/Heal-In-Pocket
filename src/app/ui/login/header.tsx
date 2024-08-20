import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <Link href="/" style={{ display: 'flex' }} prefetch={false}>
          <Image src="/logos/HIP_logo_row.png" width={249} height={70} priority alt="logo" />
        </Link>
      </div>
    </div>
  );
}
