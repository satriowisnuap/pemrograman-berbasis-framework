import { ProductType } from "@/types/Products.type";
import styles from "./detailProduk.module.scss";

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          <img src={products.image && products.image} alt={products.name} />
        </div>

        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>{products.name}</h1>
          <p className={styles.produkdetail__category}>{products.category}</p>
          <p className={styles.produkdetail__price}>
            Rp {products.price && products.price.toLocaleString("id-ID")}
          </p>

          <button className={styles.produkdetail__button}>Beli Sekarang</button>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
