export default function BrailleCell({ pattern }: { pattern: number[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 bg-white border border-gray-400 rounded-xl p-2 w-16 h-24 shadow">
      {pattern.map((dot, i) => (
        <div
          key={i}
          className={`w-5 h-5 rounded-full transition-all ${
            dot ? "bg-black" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
}
