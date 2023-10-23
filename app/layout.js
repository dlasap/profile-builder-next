import "./globals.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Merienda } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";

const merienda = Merienda({ subsets: ["latin"] });

export const metadata = {
  title: "Lunar Kaye Lavides",
  description: "Online Portfolio of Lunar Kaye Lavides - BS Chemical Engineering - Process Engineer 1",
  openGraph: {
    title: "Lunar Kaye Lavides",
    description: "Online Portfolio of Lunar Kaye Lavides - BS Chemical Engineering - Process Engineer 1",
    url: "https://profile-builder-next-cmz7-dlasap.vercel.app/",
    siteName: "Lunar Kaye Lavides Portfolio",
    images: [
      {
        url: "/387556190_341988828203849_1151008598085885728_n.jpg",
        width: 700,
        height: 500,
      },
    ],
    locale: "en -EN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merienda.className}>
        <Header firstName="Lunar Kaye" lastName="Lavides" occupation={"Process Engineer 1 - BS Chemical Engineer"} />
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
