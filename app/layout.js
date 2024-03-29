import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "../components";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fullstack Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container">
          <StateContext>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
          </StateContext>
        </div>
      </body>
    </html>
  );
}
