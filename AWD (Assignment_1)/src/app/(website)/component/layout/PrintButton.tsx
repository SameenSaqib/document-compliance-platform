"use client";

export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} style={{ border: "1px solid #d1d5db", borderRadius: 7, background: "white", padding: "7px 10px", color: "#374151", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
      Print page
    </button>
  );
}
