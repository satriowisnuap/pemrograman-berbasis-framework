import Head from "next/head";
import style from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={style.error}>
      <Head>
        {/* Judul Halaman */}
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta
          name="description"
          content="Halaman yang Anda cari tidak ditemukan"
        />
      </Head>

      {/* Gambar ilustrasi 404 */}
      <img src="/404.png" alt="404 Error" className={style.error__image} />

      {/* Deskripsi singkat tentang error 404 */}
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
    </div>
  );
};

export default Custom404;
