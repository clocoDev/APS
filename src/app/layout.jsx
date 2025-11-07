import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import MuiThemeProvider from "./utils/Providers/ThemeProvider";
import Footer from "./Components/Footer/Footer";
import Providers from "../redux/store/Provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Acting Performance Studio",
  description: "Created by Team Cloco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <MuiThemeProvider>
            <Header />
            {children}
            <Footer />
          </MuiThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
