import styles from "./styles.module.css";
import CoolJjbLogo from "../../assets/icons/Cooljob.svg";

function Nav() {
  return (
    <div className={styles.nav_container}>
      <img src={CoolJjbLogo} alt="cooljob_logo" />
      <div className={styles.nav_menu}>
        <div>
          <a href="#">поиск работы</a>
          <a href="#">поиск стартапов</a>
        </div>
        <div>
          <a href="">регистрация</a>
          <button className={styles.login_btn}>Вход</button>
        </div>
      </div>
    </div>
  );
}
export default Nav;
