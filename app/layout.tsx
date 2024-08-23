import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/header/Header";
import bg from "@/app/assets/background.jpg";
import bg2 from "@/app/assets/bg2.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duc Manh Profile",
  description: "Profile of Duc Manh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          backgroundImage: `url(${bg2.src})`,
          // width: "100%",
          // height: "100%",
          backgroundPosition: "-60px 0px"
        }}
      >
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
