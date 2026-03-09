import style from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={style.error}>
      <img src="/404.png" alt="404 Error" className={style.error__image} />
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
    </div>
  );
};

export default Custom404;
