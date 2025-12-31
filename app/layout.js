import {  Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mahamure Kedar",
  description: "Kedar's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
         <link rel="icon" type="image/png" sizes="256x256" href="/mk.png"/>
      </head>
      <body className={`${inter.className}`} suppressHydrationWarning>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
