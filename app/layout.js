import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb | Vacation rentals, cabins, beach houses, & more",
  description: "Inspiration for future getaways · MentoneCottage rentals · SedonaVacation rentals · HelenHouse rentals · Pine MountainCabin rentals · Stone MountainCabin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
