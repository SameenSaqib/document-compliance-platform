
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#1e293b", color: "white" }}>
      <h2>Document Compliance Platform</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        <Link href="/" style={{ color: "white" }}>Home</Link>
        <Link href="/dashboard" style={{ color: "white" }}>Dashboard</Link>
        <Link href="/upload-document" style={{ color: "white" }}>Upload Document</Link>
        <Link href="/pdf-analyzer" style={{ color: "white" }}>PDF Analyzer</Link>
        <Link href="/docx-analyzer" style={{ color: "white" }}>DOCX Analyzer</Link>
        <Link href="/excel-analyzer" style={{ color: "white" }}>Excel Analyzer</Link>
        <Link href="/criteria-builder" style={{ color: "white" }}>Criteria Builder</Link>
        <Link href="/required-sections" style={{ color: "white" }}>Required Sections</Link>
        <Link href="/keyword-checker" style={{ color: "white" }}>Keyword Checker</Link>
        <Link href="/evidence-checker" style={{ color: "white" }}>Evidence Checker</Link>
        <Link href="/missing-information" style={{ color: "white" }}>Missing Information</Link>
        <Link href="/compliance-score" style={{ color: "white" }}>Compliance Score</Link>
        <Link href="/reports" style={{ color: "white" }}>Reports</Link>
      </div>
    </nav>
  );
}
