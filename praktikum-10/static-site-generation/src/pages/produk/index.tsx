import useSWR from "swr";
import TampilanProduk from "../views/produk";
import fetcher from "../utils/swr/fetcher";

const Kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  if (error) {
    return <p>Gagal mengambil data produk</p>;
  }

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  );
};

export default Kategori;
