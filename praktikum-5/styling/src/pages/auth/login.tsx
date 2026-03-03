import styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
    const { push } = useRouter();
    
    const handleLogin = () => {
        console.log("Processing login...");
        push('/produk');
    };

    return(
        <div className={styles.login}>
            <h1>Halaman Login</h1>
            
            <button 
                onClick={handleLogin}
                className={styles.button}
            >
                Login (Navigasi ke Product)
            </button>
            
            <p>
                Belum punya akun?{" "}
                <Link href="/auth/register">
                    Register di sini
                </Link>
            </p>
        </div>
    );
};

export default HalamanLogin;