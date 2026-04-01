import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>About Me 👨‍💻</h1>
          <p></p>
        </div>

        <div className={styles.profile}>
          <div className={styles.avatar}>S</div>

          <h2 className={styles.name}>Satrio Wisnu Adi Pratama</h2>

          <p className={styles.role}>Mahasiswa D4 Teknik Informatika</p>
        </div>

        <div className={styles.info}>
          <div className={styles.item}>
            <span>NIM</span>
            <p>2341720219</p>
          </div>

          <div className={styles.item}>
            <span>Program Studi</span>
            <p>D4 Teknik Informatika</p>
          </div>
        </div>

        <div className={styles.footer}>
          <p>
            "Sedang belajar, berkembang, dan terus mencari versi terbaik diri
            🚀"
          </p>
        </div>
      </div>
    </div>
  );
}
