import TampilanProduk from "../views/produk";
import { ProductType } from "../types/Products.type";

const HalamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/produk");
    const response: { data: ProductType[] } = await res.json();

    // console.log("Data produk yang diambil dari API:", response);

    return {
      props: {
        products: response.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching products in getStaticProps:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}
