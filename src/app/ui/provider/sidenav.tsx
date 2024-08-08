import styles from './sidenav.module.css';

export default function SideNavigator() {
    return (
        <div className={styles.header}>
            <div className={styles.leftSection}>
                logo place
            </div>

            <div className={styles.middleSection}>
                empty
            </div>

            <div className={styles.rightSection}>
                login&user
            </div>            
        </div>
    );
}
