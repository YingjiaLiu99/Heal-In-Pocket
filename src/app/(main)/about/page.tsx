import Image from 'next/image';
import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>About Us</h1>
        <h2>Our Story, Vision, and Goal: Advancing Healthcare Access</h2>
      </div>

      <div className={styles.row1}>
        <Image src="/intro/atSCC.jpg" width={756} height={567} alt="pic1" />
        <div className={styles.textBox}>
          <p>
            <span className={styles.highlight}>Heal in Pocket</span> was born out of a passion for
            healthcare equity. Founded by a group of dedicated volunteers and students, our journey
            began with a simple yet powerful idea: to create a free electronic health record system
            that caters specifically to the unique needs of medical outreach programs. Sponsored by
            the Open Collective Foundation since June 2023, we&apos;ve partnered with organizations
            like Street Corner Care to test and refine our platform in real-world settings.
          </p>
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.textBox}>
          <p>
            <span className={styles.highlight}>Our mission</span> is clear—to bridge the healthcare
            gap by providing an accessible, secure, and multilingual EHR system that empowers both
            patients and providers. We envision a future where healthcare access knows no
            boundaries, where every individual, regardless of their location or circumstances, can
            receive the quality care they deserve. At Pocket Health, we believe in the power of
            technology to make a meaningful impact, and we&apos;re committed to fostering a world
            where healthcare equity is not just an aspiration, but a reality.
          </p>
        </div>
        <Image src="/intro/atSCC2.jpg" width={600} height={336} alt="pic2" />
      </div>
    </main>
  );
}
