import type { ReactNode } from "react";

type PanelProps = { title?: string; description?: string; children: ReactNode; };

export default function Panel({ title, description, children }: PanelProps) {
  return (
    <section style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 14, padding: 20, boxShadow: "0 1px 2px rgba(15,23,42,0.03)", minWidth: 0 }}>
      {(title || description) && <div style={{ marginBottom: 16 }}>
        {title && <h2 style={{ margin: 0, color: "#111827", fontSize: 16, fontWeight: 750 }}>{title}</h2>}
        {description && <p style={{ margin: "6px 0 0", color: "#6b7280", fontSize: 13, lineHeight: 1.6 }}>{description}</p>}
      </div>}
      {children}
    </section>
  );
}
