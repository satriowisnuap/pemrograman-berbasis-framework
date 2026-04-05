import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";

// Menambahkan 404 disini
const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main>
      {/* Navbar hanya tampil jika pathname tidak ada di disableNavbar */}
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;
