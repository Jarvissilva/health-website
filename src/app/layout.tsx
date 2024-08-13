import "app/style.css";
import { Poppins } from "next/font/google";
import Header from "components/header";
import Footer from "components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="px-[clamp(1rem,5vw,5rem)]">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
