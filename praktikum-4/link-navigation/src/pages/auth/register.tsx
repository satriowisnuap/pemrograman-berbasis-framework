import Link from "next/link";

const halamanRegister = () => {
  return (
    <div>
      <h1>Halaman Register</h1>
      {/* menambahkan link ke halaman login */}
      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default halamanRegister;