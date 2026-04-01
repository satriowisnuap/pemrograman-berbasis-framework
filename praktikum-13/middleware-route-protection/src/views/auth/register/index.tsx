import Link from "next/link";
import { useRouter } from "next/router";
// import styles from './register.module.css';
import styles from './register.module.scss';

const TampilanRegister = () => {
      const {push} = useRouter();
    const handleregister = () => {
        // logic register disini
        push('/produk');
    }
  return (
    <div className={styles.register}>
      <h1 className="text-3xl font-bold text-blue-600 ">Halaman register</h1>
      <button onClick={()=> handleregister()}>register</button> <br />
      <Link href={"/auth/login"}>Ke Halaman Login</Link>
    </div>
  );
}   

export default TampilanRegister

