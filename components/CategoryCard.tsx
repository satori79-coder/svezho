export default function CategoryCard({ name, emoji, color }: { name: string; emoji: string; color: string }) {
  return (
    <a href="/catalog"
      className={`group flex flex-col items-center justify-center rounded-2xl p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg ${color}`}>
      <div className="text-5xl transition group-hover:scale-110">{emoji}</div>
      <div className="mt-3 font-semibold text-brand-900">{name}</div>
    </a>
  );
}
