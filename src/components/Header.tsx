import tuiuiuLogo from '../images/tuiuiu-logo.png';
import styles from './Header.module.css';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={tuiuiuLogo} alt="Tuiuiu Logo" />
        <p>TO-DO</p>
      </header>
    </>
  )
}