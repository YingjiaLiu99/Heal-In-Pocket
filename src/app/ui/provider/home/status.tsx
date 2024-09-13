import { USERSTATUS } from '@/app/constants';
import styles from './status.module.css';

type StatusType = 'Online' | 'Offline' | 'Busy';

interface StatusBarProps {
  status: StatusType;
}

export default function StatusBar({ status }: StatusBarProps) {
  const getStatusColor = () => {
    switch (status) {
      case USERSTATUS.ONLINE:
        return 'green';
      case USERSTATUS.OFFLINE:
        return 'gray';
      case USERSTATUS.BUSY:
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dot} style={{ backgroundColor: getStatusColor() }}></div>
      <div className={styles.statusText} style={{ color: getStatusColor() }}>
        {status}
      </div>
    </div>
  );
}
