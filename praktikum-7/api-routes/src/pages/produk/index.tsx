import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
};
const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  //   },[]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
        // console.log("Data produk:", responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((products: ProductType) => (
        <div key={products.id}>
          <h2>{products.nama}</h2>
          <p>Harga: {products.harga}</p>
          <p>Ukuran: {products.ukuran}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;
