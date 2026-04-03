import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.scss";

const TampilanLogin = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    // sementara (mock login)
    push("/produk");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back 👋</h1>
        <p className={styles.subtitle}>Silakan login untuk melanjutkan</p>

        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />

        <button onClick={handleLogin} className={styles.button}>
          Login
        </button>

        <p className={styles.registerText}>Belum punya akun?</p>

        <Link href="/auth/register" className={styles.link}>
          Daftar di sini
        </Link>
      </div>
    </div>
  );
};

export default TampilanLogin;
