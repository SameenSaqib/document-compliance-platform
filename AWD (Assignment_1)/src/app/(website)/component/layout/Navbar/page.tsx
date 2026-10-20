import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Dashboard", "/dashboard"],
  ["Upload Document", "/upload-document"],
  ["PDF Analyzer", "/pdf-analyzer"],
  ["DOCX Analyzer", "/docx-analyzer"],
  ["Excel Analyzer", "/excel-analyzer"],
  ["Criteria Builder", "/criteria-builder"],
  ["Required Sections", "/required-sections"],
  ["Keyword Checker", "/keyword-checker"],
  ["Evidence Checker", "/evidence-checker"],
  ["Reports", "/reports"],
];

export default function Navbar() {
  return (
    <header style={{ padding: "16px", background: "#1f2937", color: "white" }}>
      <h2 style={{ margin: "0 0 12px" }}>Document Compliance Platform</h2>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {links.map(([label, href]) => (
          <Link key={href} href={href} style={{ color: "white", textDecoration: "none" }}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
