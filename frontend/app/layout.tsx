import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from 'react-hot-toast';
import { cookieToInitialState } from "wagmi";
import getConfig from "next/config";
import { headers } from 'next/headers'
import { ReactNode } from "react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Persona Finance AI",
  description: "AI-powered NFT trading platform",
};

export default function RootLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get('cookie'),
  )
  return (
    <html lang="en">
      <body>
        <Providers initialState={initialState}>
          {props.children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
