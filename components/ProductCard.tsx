export default function ProductCard({ name, price, oldPrice, unit, emoji, badge }: {
  name: string; price: number; oldPrice?: number; unit: string; emoji: string; badge?: string;
}) {
  return (
    <div className="group flex flex-col rounded-2xl bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-50">
        <div className="flex h-full items-center justify-center text-7xl transition group-hover:scale-110">
          {emoji}
        </div>
        {badge && (
          <span className="absolute left-2 top-2 rounded-full bg-amber-accent px-2 py-1 text-xs font-bold text-white">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-3 font-semibold text-brand-900">{name}</h3>
      <div className="text-sm text-gray-500">{unit}</div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-xl font-extrabold text-brand-700">{price} ₽</span>
          {oldPrice && <span className="ml-2 text-sm text-gray-400 line-through">{oldPrice} ₽</span>}
        </div>
        <button className="rounded-xl bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700">
          В корзину
        </button>
      </div>
    </div>
  );
}
