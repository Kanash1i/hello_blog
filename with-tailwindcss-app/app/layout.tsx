import type { Metadata } from "next";
import { useTranslation } from 'react-i18next';
// import { Inter } from "next/font/google";
import "../styles/globals.css";
import { NICKNAME, SLOGAN, WEBSITE } from '../constants';

// const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: `%s-${WEBSITE}`,
  description: `${SLOGAN}`,
  keywords: NICKNAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">

      {/* <head>
        <link 
        rel=""
      </head> */}
      <body >{children}</body>
    </html>
  );
}
