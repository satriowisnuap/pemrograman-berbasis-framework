import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduk";
import { ProductType } from "@/types/Products.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  {
    /Digunakan client-side rendering/;
  }
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/produk/${query.produk}`,
  //   fetcher,
  // );

  // return (
  //   <div>
  //     <DetailProduk products={isLoading ? [] : data.data} />
  //   </div>
  // );

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

{
  /Digunakan server-side rendering/;
}
export async function getServerSideProps({
  params,
}: {
  params: { produk: string };
}) {
  const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
  const respone = await res.json();
  return {
    props: {
      product: respone.data,
    },
  };
}

{
  /Digunakan static-side generation/;
}
// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/produk`);
//   const respone = await res.json();

//   const paths = respone.data.map((product: ProductType) => ({
//     params: { produk: product.id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//   const respone: { data: ProductType[] } = await res.json();
//   return {
//     props: {
//       product: respone.data,
//     },
//   };
// }
