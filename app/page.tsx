import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              🌿 Сезон свежести
            </span>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight text-brand-900 sm:text-6xl">
              Свежесть <br />каждый день
            </h1>
            <p className="mt-5 max-w-md text-lg text-gray-600">
              Фермерские овощи, фрукты, молочка и мясо — напрямую от проверенных производителей. Доставим за 60 минут.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/catalog" className="btn-primary">Смотреть каталог →</Link>
              <Link href="/delivery" className="btn-outline">Условия доставки</Link>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div><div className="text-2xl font-bold text-brand-700">120+</div><div className="text-gray-500">магазинов</div></div>
              <div><div className="text-2xl font-bold text-brand-700">60 мин</div><div className="text-gray-500">доставка</div></div>
              <div><div className="text-2xl font-bold text-brand-700">5000+</div><div className="text-gray-500">товаров</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-200 opacity-50 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-red-600 shadow-soft" />
              <div className="aspect-square translate-y-8 rounded-3xl bg-gradient-to-br from-yellow-300 to-orange-400 shadow-soft" />
              <div className="aspect-square -translate-y-4 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-soft" />
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-soft" />
            </div>
          </div>
        </div>
      </section>

      {/* КАТЕГОРИИ */}
      <section className="section">
        <h2 className="text-3xl font-bold text-brand-900">Категории</h2>
        <p className="mt-2 text-gray-600">Выберите раздел и найдите любимые продукты</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => <CategoryCard key={c.name} {...c} />)}
        </div>
      </section>

      {/* ХИТЫ */}
      <section className="section">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-brand-900">Хиты недели 🔥</h2>
            <p className="mt-2 text-gray-600">Самые популярные товары у наших покупателей</p>
          </div>
          <Link href="/catalog" className="hidden font-semibold text-brand-600 hover:text-brand-700 sm:block">Все товары →</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => <ProductCard key={p.id} {...p} />)}
        </div>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="section">
        <div className="grid gap-6 rounded-3xl bg-brand-600 p-10 text-white md:grid-cols-3">
          {[
            { icon: "🚜", title: "От фермеров", text: "Работаем напрямую с 120+ локальными хозяйствами" },
            { icon: "⚡", title: "Быстрая доставка", text: "Привезём заказ за 60 минут в пределах города" },
            { icon: "✅", title: "Контроль качества", text: "Проверяем каждую партию — только свежее" },
          ].map((f) => (
            <div key={f.title}>
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-3 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-brand-100">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
