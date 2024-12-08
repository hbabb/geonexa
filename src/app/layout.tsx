import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900", "100", "200", "300"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GeoNexa, LLC",
  description: "GeoNexa, LLC - Your Trusted Partner in Geospatial Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${poppins.variable} gradient-top h-screen w-screen bg-secondary-whiteGradient antialiased dark:bg-primary-grayGradient`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
