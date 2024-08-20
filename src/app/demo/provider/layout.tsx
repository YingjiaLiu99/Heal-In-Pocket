import SideNavigator from './sidenav';
import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <SideNavigator />
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
}