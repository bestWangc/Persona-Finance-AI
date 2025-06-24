import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from 'react-hot-toast';
import { cookieToInitialState } from "wagmi";
import getConfig from "next/config";
import { headers } from 'next/headers'
import { ReactNode } from "react";
import ParticlesBackground from "./components/ParticlesBackground";

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
    <html lang="zh">
      <head>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

      </head>
      <body>
        <ParticlesBackground />
        <Providers initialState={initialState}>
          {props.children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
