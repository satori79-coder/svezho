export default function Contacts() {
  return (
    <section className="section">
      <h1 className="text-4xl font-extrabold text-brand-900">Контакты</h1>
      <p className="mt-2 text-gray-600">Мы всегда на связи — выберите удобный способ</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {[
            { icon: "📞", title: "Телефон", value: "8 800 555-35-35", sub: "Бесплатно по России" },
            { icon: "✉️", title: "Email", value: "hello@svezho.ru", sub: "Ответим в течение часа" },
            { icon: "📍", title: "Главный офис", value: "Москва, ул. Садовая, 12", sub: "БЦ «Зелёный», 5 этаж" },
            { icon: "🕒", title: "Режим работы", value: "Ежедневно 8:00–23:00", sub: "Доставка — круглосуточно" },
          ].map((c) => (
            <div key={c.title} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft">
              <div className="text-3xl">{c.icon}</div>
              <div>
                <div className="text-sm text-gray-500">{c.title}</div>
                <div className="text-lg font-bold text-brand-900">{c.value}</div>
                <div className="text-sm text-gray-500">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="rounded-2xl bg-white p-8 shadow-soft">
          <h3 className="text-xl font-bold text-brand-900">Напишите нам</h3>
          <p className="mt-1 text-sm text-gray-500">Ответим в течение 30 минут</p>
          <div className="mt-6 space-y-4">
            <input placeholder="Ваше имя" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-500" />
            <input placeholder="Email или телефон" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-500" />
            <textarea rows={4} placeholder="Сообщение" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-brand-500" />
            <button type="button" className="btn-primary w-full">Отправить сообщение</button>
          </div>
        </form>
      </div>
    </section>
  );
}
