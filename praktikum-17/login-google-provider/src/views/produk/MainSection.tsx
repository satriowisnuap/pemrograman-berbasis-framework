import styles from "./produk.module.scss";

const MainSection = () => {
  const products = [
    { name: "Produk A", desc: "Deskripsi Produk A", price: "Rp 100.000" },
    { name: "Produk B", desc: "Deskripsi Produk B", price: "Rp 200.000" },
    { name: "Produk C", desc: "Deskripsi Produk C", price: "Rp 300.000" },
    { name: "Produk D", desc: "Deskripsi Produk D", price: "Rp 400.000" },
    { name: "Produk E", desc: "Deskripsi Produk E", price: "Rp 500.000" },
    { name: "Produk F", desc: "Deskripsi Produk F", price: "Rp 600.000" },
    { name: "Produk G", desc: "Deskripsi Produk G", price: "Rp 700.000" },
    { name: "Produk H", desc: "Deskripsi Produk H", price: "Rp 800.000" },
  ];

  return (
    <section className={`${styles.mainSection} py-10 px-6`}>
      <div className={`${styles.container} max-w-6xl mx-auto`}>
        <h2 className="text-2xl font-semibold mb-6">List Produk</h2>
        <div className={`${styles.productGrid} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Card Produk */}
              <div className={`${styles.productCard} border p-4 rounded shadow-sm hover:shadow-md transition w-full`}>
                <h3 className="text-lg font-medium mb-1 text-center">{product.name}</h3>
              </div>
              
              {/* Deskripsi dan harga */}
              <p className="text-gray-700 text-sm mt-2 text-center">{product.desc}</p>
              <p className={`${styles.price} font-bold text-gray-900 mt-1 text-center`}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;