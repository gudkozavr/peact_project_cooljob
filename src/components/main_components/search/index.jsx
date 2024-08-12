import styles from "./styles.module.css";
import backGroundImg from "../../../assets/img/background_img.svg";
function Search() {
  return (
    <>
      <div className={styles.search_container}>
        <div className={styles.search_}>
          <h1>Один клик и работа в кармане</h1>
          <form className={styles.form_container} action="">
            <input
              className={styles.search_company}
              type="text"
              placeholder="Должность или компания"
            />
            <input
              className={styles.search_city}
              type="text"
              placeholder="Город, Страна"
            />
            <input type="button" value="Поиск" />
          </form>
        </div>
        <img src={backGroundImg} alt="" />
      </div>
    </>
  );
}

export default Search;
