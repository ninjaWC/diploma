import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <span className={styles.copyright}>
                    © {new Date().getFullYear()} AgriControl. Все права защищены.
                </span>
                <nav className={styles.footerNav}>
                    <a href="mailto:support@agricontrol.ru" className={styles.footerLink}>Поддержка</a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a>
                    <a href="#" className={styles.footerLink}>Политика конфиденциальности</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;