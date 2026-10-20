type FileUploadProps = { title?: string; helpText?: string; accept?: string; };
export default function FileUpload({ title = "Choose a document", helpText = "Supported formats: PDF, DOCX, XLSX", accept = ".pdf,.docx,.xlsx,.xls" }: FileUploadProps) {
  return (
    <div style={{ border: "2px dashed #bfdbfe", background: "#f8fbff", borderRadius: 12, padding: "28px 18px", textAlign: "center" }}>
      <div style={{ width: 45, height: 45, borderRadius: 12, background: "#dbeafe", color: "#1d4ed8", display: "grid", placeItems: "center", fontSize: 25, margin: "0 auto 12px" }}>↑</div>
      <div style={{ color: "#111827", fontWeight: 750, fontSize: 14 }}>{title}</div>
      <p style={{ color: "#6b7280", fontSize: 12, margin: "7px 0 16px" }}>{helpText}</p>
      <input type="file" accept={accept} aria-label={title} style={{ display: "block", margin: "0 auto", maxWidth: "100%", fontSize: 12 }} />
      <p style={{ color: "#9ca3af", fontSize: 11, margin: "14px 0 0" }}>Prototype only: file selection is shown, but analysis is not connected yet.</p>
    </div>
  );
}
