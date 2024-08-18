import styles from './page.module.css';

export default function GetInvolved() {
  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <h1>Get Involved</h1>
        <h2>Be a Part of the Change</h2>
      </div>

      <div className={styles.subTitle}>Support Our Work</div>

      <div className={styles.row1}>
        <div className={styles.textBox}>
          <p>
            <span className={styles.highlight}>At Heal in Pocket,</span> we believe in the power of
            community and the impact that passionate individuals can make when they come together
            for a common cause. If you’re a software engineer, healthcare professional, or simply
            someone who cares about making a difference, we invite you to join our mission. By
            contributing your skills and time, you’ll be part of an innovative team dedicated to
            transforming healthcare accessibility for underserved communities. Together, we can
            break down barriers, empower those in need, and create lasting change. Join us in our
            journey to ensure that everyone, regardless of where they are, has access to the quality
            healthcare they deserve.
          </p>
        </div>
        <div className={styles.donate}>
          <p>Heal in Pocket is fiscally sponsored by</p>
          <a href="https://opencollective.com/foundation" target="_blank">
            Open Collective Foundation
          </a>
          <p>EIN: 81-4004928</p>
        </div>
      </div>

      <div className={styles.subTitle}>Contact Us</div>

      <div className={styles.formContainer}>
        <form>
          <label htmlFor="firstName" className={styles.label}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=""
            className={styles.input}
          />
          <label htmlFor="lastName" className={styles.label}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder=""
            className={styles.input}
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="text" id="email" name="email" placeholder="" className={styles.input} />
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea id="message" name="message" className={styles.input} />
          <input type="submit" value="Send" className={styles.submit} />
        </form>
      </div>
    </div>
  );
}
