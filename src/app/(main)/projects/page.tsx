'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Projects() {
  useEffect(() => {
    const videoElement = document.getElementById('demoVideo');
    if (videoElement && window.innerWidth <= 640) {
      videoElement.removeAttribute('autoplay');
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>Project Incentive and Progress</h1>
        <h2>Milestones on Our Journey Towards Healthcare Equity</h2>
      </div>

      <div className={styles.row1}>
        <Image src="/intro/atSCC3.png" width={600} height={417} alt="pic1" />
        <div className={styles.textBox}>
          <p>
            <span className={styles.highlight}>Our journey</span> towards transforming medical
            outreach began with a meaningful partnership with Street Corner Care, a homeless
            outreach program affiliated with the First Presbyterian Church of San Diego. This
            collaboration has been instrumental in shaping Heal in Pocket into a tool that truly
            meets the needs of both patients and healthcare providers in underserved communities. By
            working closely with the dedicated volunteers and medical professionals at Street Corner
            Care, we&apos;ve been able to beta-test our platform in real-world conditions, gathering
            invaluable feedback to refine and optimize our EHR system. This partnership not only
            validates our mission but also serves as a foundation for expanding our impact and
            reaching more communities in need.
          </p>
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.textBox}>
          <p>
            <span className={styles.highlight}>Heal in Pocket</span> was inspired by the challenges
            faced by medical outreach teams using paper records. We collaborated with nurses,
            doctors, and volunteers at Street Corner Care, whose insights guided the creation of our
            web-based EHR system. Through their feedback and real-world testing, we developed a
            platform that streamlines healthcare delivery and empowers providers to offer better
            care. Pocket Health is a result of this collective effort, designed to enhance medical
            outreach and promote healthcare equity.
          </p>
        </div>
        <video
          id="demoVideo"
          width="864"
          height="486"
          controls
          preload="none"
          loop
          poster="/intro/demo1-frameAt0m4s.jpg"
          autoPlay
        >
          <source src="/intro/demo1.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
