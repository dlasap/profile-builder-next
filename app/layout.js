import "./globals.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"] });

export const metadata = {
  title: "Lunar Kaye Lavides",
  description: "Online Portfolio of Lunar Kaye Lavides - BS Chemical Engineering - Process Engineer 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merienda.className}>
        <Header firstName="Lunar Kaye" lastName="Lavides" occupation={"Process Engineer 1 - BS Chemical Engineer"} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
