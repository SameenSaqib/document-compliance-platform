type PageHeaderProps = { title: string; description: string; };

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ color: "#2563eb", textTransform: "uppercase", letterSpacing: 1.4, fontWeight: 800, fontSize: 10, marginBottom: 8 }}>DOCUMENT COMPLIANCE</div>
      <h1 style={{ margin: "0 0 8px", color: "#111827", fontSize: 29, lineHeight: 1.2, letterSpacing: -0.7 }}>{title}</h1>
      <p style={{ margin: 0, color: "#6b7280", fontSize: 14, lineHeight: 1.7 }}>{description}</p>
    </div>
  );
}
