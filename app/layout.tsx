
import type { Metadata } from "next";
import Header from "@/components/main/header/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Biayna | Structural Engineering, Construction, Real Estate Consulting",
  description:
    "Full service structural engineering and construction firm specializing in seismic retrofits, non-ductile concrete, commercial, residential construction, real estate development consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <meta name="city" content="Los Angeles" />
        <meta name="country" content="United States (USA)" />
        <meta name="state" content="California" />
        <meta name="zipcode" content="91040" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Header />

        {children}

      </body>
    </html>
  );
}
