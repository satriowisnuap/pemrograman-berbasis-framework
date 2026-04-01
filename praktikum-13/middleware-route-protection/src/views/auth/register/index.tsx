import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.scss";

const TampilanRegister = () => {
  const { push } = useRouter();

  const handleRegister = () => {
    // logic register sementara
    push("/produk");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create Account 🚀</h1>
        <p className={styles.subtitle}>Yuk mulai perjalananmu bersama kami</p>

        <input
          type="text"
          placeholder="Nama Lengkap"
          className={styles.input}
        />
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />

        <button onClick={handleRegister} className={styles.button}>
          Register
        </button>

        <p className={styles.text}>Sudah punya akun?</p>

        <Link href="/auth/login" className={styles.link}>
          Login di sini
        </Link>
      </div>
    </div>
  );
};

export default TampilanRegister;
