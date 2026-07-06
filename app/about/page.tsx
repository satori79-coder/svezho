export default function About() {
  return (
    <>
      <section className="bg-brand-50">
        <div className="section">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">О компании</span>
          <h1 className="mt-2 text-4xl font-extrabold text-brand-900 sm:text-5xl">
            Мы верим, что еда должна быть живой
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-700">
            «Свежо» — это сеть магазинов нового формата, где фермерские продукты попадают на ваш стол
            быстрее, чем за сутки. Мы работаем напрямую с производителями и гарантируем качество.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { year: "2018", title: "Основание", text: "Первый магазин в Краснодаре. 12 сотрудников, 200 товаров." },
            { year: "2022", title: "Экспансия", text: "Открыли 50 магазинов в 8 городах. Запустили доставку." },
            { year: "2026", title: "Сегодня", text: "120+ магазинов, собственная логистика и 120 фермеров-партнёров." },
          ].map((t) => (
            <div key={t.year} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft">
              <div className="text-4xl font-extrabold text-brand-600">{t.year}</div>
              <h3 className="mt-2 text-xl font-bold text-brand-900">{t.title}</h3>
              <p className="mt-2 text-gray-600">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="text-3xl font-bold text-brand-900">Наши ценности</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { icon: "🌾", title: "Локальность", text: "80% ассортимента — от российских производителей" },
            { icon: "🤝", title: "Честность", text: "Прозрачные цены, никаких скрытых наценок" },
            { icon: "♻️", title: "Экологичность", text: "Биоразлагаемая упаковка и программа возврата тары" },
            { icon: "❤️", title: "Забота", text: "Поддерживаем фермеров и обучаем молодых специалистов" },
          ].map((v) => (
            <div key={v.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-soft">
              <div className="text-4xl">{v.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-brand-900">{v.title}</h3>
                <p className="mt-1 text-gray-600">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
