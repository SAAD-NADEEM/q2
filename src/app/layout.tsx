import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-full items-center overflow-y-scroll">
        <Header />
        <main className="flex-1 w-full ">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
