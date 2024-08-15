import Header from '@/app/ui/login/header';
import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
