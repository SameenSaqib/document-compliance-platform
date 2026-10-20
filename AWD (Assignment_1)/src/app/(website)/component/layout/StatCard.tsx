type StatCardProps = { label: string; value: string; note: string; tone?: "blue" | "green" | "orange" | "purple"; };
const tones = {
  blue: { background: "#eff6ff", color: "#1d4ed8" },
  green: { background: "#ecfdf5", color: "#047857" },
  orange: { background: "#fff7ed", color: "#c2410c" },
  purple: { background: "#f5f3ff", color: "#6d28d9" },
};
export default function StatCard({ label, value, note, tone = "blue" }: StatCardProps) {
  return (
    <div style={{ flex: "1 1 175px", minWidth: 155, background: "white", border: "1px solid #e5e7eb", borderRadius: 13, padding: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <span style={{ color: "#6b7280", fontSize: 12, fontWeight: 600 }}>{label}</span>
        <span style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", ...tones[tone] }} />
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, color: "#111827", margin: "13px 0 5px" }}>{value}</div>
      <div style={{ color: "#9ca3af", fontSize: 11 }}>{note}</div>
    </div>
  );
}
