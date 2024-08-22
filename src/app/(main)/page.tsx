import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Intro() {
  return (
    <main>
      <div className={styles.textBox}>
        <h1>Heal in Pocket</h1>
        <h2>Empowering health equity for all</h2>
      </div>

      <div className={styles.demo}>
        <div className={styles.demoPicture}>
          <Image src="/intro/browser-demo1.png" width={1440} height={810} alt="pic1" priority />
        </div>
        <div className={styles.demoText}>
          <p>Explore our feature seamlessly in a new tab - no downloads required!</p>
          <Link href="/demo/provider" passHref legacyBehavior style={{ display: 'flex' }}>
            <a target="_blank">
              <div className={styles.demoButton}>Try it Now!</div>
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
