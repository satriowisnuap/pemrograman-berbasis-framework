import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const halamanToko = () => {
    
  // const Router = useRouter();
  //   const Router = useRouter;
  //   console.log(Router);

  const { query } = useRouter();
  const [isLogin, setIsLogin] = useState(false);
      const{push} = useRouter();
      useEffect(() => {
          if(!isLogin){
              push("/auth/login");
          }
      }, []);
  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>Toko: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
      <p>Kategori: {query.slug ? query.slug[0] : "Semua Kategori"}</p>
    </div>
  );
};

export default halamanToko;