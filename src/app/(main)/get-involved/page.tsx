import styles from './page.module.css';

export default function GetInvolved() {
  return (
    <div className={styles.main}>
      <h1>Heal in Pocket is fiscally sponsored by</h1>
      <a>Open Collective Foundation</a>
      <p>Please visit this website to make contributions: </p>
      <a href="https://opencollective.com/pocket-health#category-CONTRIBUTE">
        https://opencollective.com/pocket-health#category-CONTRIBUTE
      </a>
    </div>
  );
}
