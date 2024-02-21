import styles from "./menuButton.module.css";

export default function MenuButton({ onClick, checked }) {
  return (
    <label className={styles.menu}>
      <input type="checkbox" checked={checked} className={styles.btn_input} />
      <div className={styles.btn_div} onClick={() => onClick()}>
        <span className={styles.btn_span} id={styles.span1}></span>
        <span className={styles.btn_span} id={styles.span2}></span>
      </div>
    </label>
  );
}
