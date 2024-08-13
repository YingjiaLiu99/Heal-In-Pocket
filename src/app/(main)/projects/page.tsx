import styles from './page.module.css';

export default function Projects() {
  return (
    <div className={styles.main}>
      <h1>Demo</h1>
      <h2>Partnership with Street Corner Care</h2>
      <p>
        Currently, Heal in Pocket is adapted to the work flow of Street Corner Care, a homeless
        outreach program affiliated with the First Presbyterian Church of San Diego. Functions
        include client intake by volunteer students, medical care documentation by volunteer
        providers, care record accessible to both providers and clients.{' '}
      </p>
    </div>
  );
}
