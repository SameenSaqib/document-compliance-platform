type Status = "Passed" | "Failed" | "Warning" | "Pending" | "Needs review";
type StatusBadgeProps = { status: Status; };
const colors: Record<Status, { bg: string; text: string }> = {
  Passed: { bg: "#dcfce7", text: "#166534" },
  Failed: { bg: "#fee2e2", text: "#991b1b" },
  Warning: { bg: "#fef3c7", text: "#92400e" },
  Pending: { bg: "#e5e7eb", text: "#374151" },
  "Needs review": { bg: "#ede9fe", text: "#5b21b6" },
};
export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = colors[status];
  return <span style={{ display: "inline-block", padding: "5px 9px", borderRadius: 20, background: style.bg, color: style.text, fontSize: 11, fontWeight: 750, whiteSpace: "nowrap" }}>{status}</span>;
}
