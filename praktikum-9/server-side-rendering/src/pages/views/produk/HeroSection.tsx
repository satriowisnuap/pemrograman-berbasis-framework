import styles from "./produk.module.scss";

const HeroSection = () => {
  return (
    <section className={`${styles.hero} bg-gray-700 text-white py-16 px-6 text-center`}>
      <h1 className="text-4xl font-bold mb-2">Produk Kami</h1>
      <p className="text-lg">Daftar produk tersedia</p>
    </section>
  );
};

export default HeroSection;