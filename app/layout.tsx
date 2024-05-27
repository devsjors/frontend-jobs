import BaseLayout from "@/layouts/Base";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import type { FC } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `Frontend Jobs`,
  description: `An interactive tool designed to empower frontend developers in securing their next career opportunity.`,
};

const RootLayout: FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <html lang="en" className="size-full">
      <body
        className={cn(
          "size-full font-sans antialiased bg-white text-gray-900",
          fontSans.variable
        )}
      >
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
};

export default RootLayout;
