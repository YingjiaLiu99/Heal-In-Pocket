'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Intro() {
  return (
    <main className={styles.main}>
      <h1>Heal in Pocket</h1>
      <h2>Empowering health equity for all</h2>
      <div className={styles.textBox}>
        <p>
          Heal in Pocket is a web-based electronic health record (EHR) system designed for medical
          outreach. Our platform bridges healthcare gaps by offering a user-friendly, secure
          solution accessible from any device. Heal in Pocket ensures that underserved communities
          receive efficient, accessible care, anytime, anywhere.
        </p>
      </div>
      <div className={styles.demo}>
        <div className={styles.row1}>
          <div className={styles.demoImage}>
            <Image src="/intro/browser-demo.png" width={1152} height={648} alt="pic1" priority />
          </div>
          <div className={styles.demoText}>
            <p>
              Our responsive web app adapts to any screen size—whether on an iPad, iPhone, or PC
              browser. The intuitive user interface is designed for ease of use, making it simple
              for healthcare providers to deliver quality care across all devices.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '40px',
              }}
            >
              <p>
                Explore our demo web app in a new tab — no downloads needed! Feel free to explore
                the features yourself!
              </p>
              <Link href="/demo/provider" passHref legacyBehavior prefetch={false}>
                <a target="_blank">
                  <div className={styles.demoButton}>Try it Now!</div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.row1}>
          <div className={styles.demoImage}>
            <Image src="/intro/phones-demo.png" width={1115} height={836} alt="pic2" />
          </div>
          <div className={styles.demoText}>
            <p>
              Our responsive web app adapts to any screen size—whether on an iPad, iPhone, or PC
              browser. The intuitive user interface is designed for ease of use, making it simple
              for healthcare providers to deliver quality care across all devices.
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '40px',
              }}
            >
              <p>
                Explore our demo web app in a new tab — no downloads needed! Feel free to explore
                the features yourself!
              </p>
              <Link href="/demo/provider" passHref legacyBehavior prefetch={false}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('/demo/provider', '_blank', 'width=375,height=667');
                  }}
                >
                  <div className={styles.demoButton}>Try it Now!</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
