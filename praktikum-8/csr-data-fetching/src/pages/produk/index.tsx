import { useEffect, useState } from "react";
import styles from "@/styles/produk.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const Kategori = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = () => {
    setLoading(true);

    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Daftar Produk</h1>

      <button className={styles.refreshBtn} onClick={fetchProducts}>
        {loading ? "Loading..." : "Refresh Data"}
      </button>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.price}>Rp {product.price}</p>
            <p className={styles.info}>Size: {product.size}</p>
            <p className={styles.info}>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kategori;
