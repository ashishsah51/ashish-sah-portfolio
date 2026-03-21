export function SectionDivider() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.24 0.038 250), transparent)",
        }}
      />
    </div>
  );
}
