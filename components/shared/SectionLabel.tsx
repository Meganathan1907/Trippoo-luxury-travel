interface SectionLabelProps { text: string; light?: boolean }
export default function SectionLabel({ text, light }: SectionLabelProps) {
  return (
    <p className={`section-label mb-3 ${light ? "text-coral-light" : ""}`}>
      {text}
    </p>
  );
}
