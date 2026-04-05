import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/layouts/navbar";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Praktikum Next.js</title>
      </Head>
      <h1>
        Praktikum Implementasi Login Google Provider dengan NextAuth.js +
        Firebase{" "}
      </h1>{" "}
      <br />
      <p>Satrio Wisnu Adi Pratama</p> <br />
      <p>Mahasiswa D4 Pengembangan Web</p>
    </div>
  );
}
