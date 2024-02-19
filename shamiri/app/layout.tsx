import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamiri",
  description: "Shamiri app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme appearance="dark">
          {children}
          
         </Theme>
         </body>
    </html>
  );
}
