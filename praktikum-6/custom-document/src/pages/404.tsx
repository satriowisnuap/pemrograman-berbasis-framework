import Head from "next/head";
import style from "@/styles/404.module.scss";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className={style.error}>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta
          name="description"
          content="Halaman yang Anda cari tidak ditemukan"
        />
      </Head>

      <img src="/404.png" alt="404 Error" className={style.error__image} />

      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>

      {/* Tombol kembali ke Home */}
      <Link href="/" className={style.error__button}>
        Kembali ke Home
      </Link>
    </div>
  );
};

export default Custom404;
