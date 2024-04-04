import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import Analytics from "@/components/Analytics";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const _metadata = {
  title: "SIWE AAbstractor",
  description:
    "UI to connect your Smart Accounts to dapps via SIWE (Sign-In With Ethereum).",
};

export const metadata: Metadata = {
  title: _metadata.title,
  description: _metadata.description,
  twitter: {
    card: "summary_large_image",
    creator: "@apoorvlathey",
    title: _metadata.title,
    description: _metadata.description,
  },
  openGraph: {
    type: "website",
    title: _metadata.title,
    description: _metadata.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
