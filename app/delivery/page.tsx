export default function Delivery() {
  return (
    <section className="section">
      <h1 className="text-4xl font-extrabold text-brand-900">Доставка и оплата</h1>
      <p className="mt-2 text-gray-600">Привезём свежие продукты прямо к вашей двери</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          { title: "Экспресс", time: "60 минут", price: "от 199 ₽", highlight: true },
          { title: "Стандарт", time: "до 3 часов", price: "от 99 ₽", highlight: false },
          { title: "На завтра", time: "к указанному часу", price: "Бесплатно от 1500 ₽", highlight: false },
        ].map((t) => (
          <div key={t.title}
            className={`rounded-2xl p-6 shadow-soft ${t.highlight ? "bg-brand-600 text-white ring-2 ring-brand-400" : "bg-white"}`}>
            <div className="text-sm font-semibold uppercase opacity-70">Тариф</div>
            <h3 className="mt-1 text-2xl font-bold">{t.title}</h3>
            <div className="mt-4 text-sm opacity-80">Срок</div>
            <div className="text-lg font-semibold">{t.time}</div>
            <div className="mt-3 text-sm opacity-80">Стоимость</div>
            <div className="text-2xl font-extrabold">{t.price}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-brand-900">📍 Зона доставки</h3>
          <p className="mt-2 text-gray-600">Работаем в Москве, Санкт-Петербурге, Краснодаре, Казани, Екатеринбурге и ещё 15 городах.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-brand-900">💳 Способы оплаты</h3>
          <p className="mt-2 text-gray-600">Банковские карты, СБП, Apple Pay, наличные курьеру, бонусы «Свежо».</p>
        </div>
      </div>
    </section>
  );
}
