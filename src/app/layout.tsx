import type { Metadata } from "next";
import "./styles/globals.css";
import StepCard from "@/components/StepCard";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProjectMark",
  description: "Project Mark Coding Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main className="p-6">
          <StepCard>{children}</StepCard>
        </main>
      </body>
    </html>
  );
}
