import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageLayoutProps = { children: ReactNode; };
export default function PageLayout({ children }: PageLayoutProps) {
  return (
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ width: "100%", maxWidth: 1400, boxSizing: "border-box", padding: "30px", margin: "0 auto", flex: 1 }}>
          {children}
        </main>
        <Footer />
      </div>
    
  );
}
