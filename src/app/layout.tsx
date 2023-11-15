import type { Metadata } from "next";
import "../styles/globals.css";
import StepCard from "@/components/StepCard";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/context/globalContext";

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
        <GlobalContextProvider>
          <Header />
          <main className="p-6">
            <StepCard>{children}</StepCard>
          </main>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
