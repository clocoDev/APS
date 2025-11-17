"use client";

import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LayoutClient = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/Pages/LoginPage");

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

export default LayoutClient;
