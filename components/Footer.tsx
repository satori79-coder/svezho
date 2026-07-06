import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <Logo className="!text-white" />
          <p className="mt-4 text-sm text-brand-200">
            Свежесть каждый день. Локальные фермеры, проверенное качество, быстрая доставка.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Магазин</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/catalog" className="hover:text-white">Каталог</a></li>
            <li><a href="/about" className="hover:text-white">О нас</a></li>
            <li><a href="/delivery" className="hover:text-white">Доставка</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Контакты</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 8 800 555-35-35</li>
            <li>✉️ hello@svezho.ru</li>
            <li>🕒 Ежедневно 8:00–23:00</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Подписка</h4>
          <p className="text-sm text-brand-200">Скидка 10% на первый заказ</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@mail.ru"
              className="w-full rounded-lg bg-brand-800 px-3 py-2 text-sm text-white placeholder-brand-300 outline-none focus:ring-2 focus:ring-brand-400" />
            <button className="rounded-lg bg-brand-500 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-400">→</button>
          </form>
        </div>
      </div>
      <div className="border-t border-brand-800 py-5 text-center text-xs text-brand-300">
        © 2026 Свежо. Все права защищены.
      </div>
    </footer>
  );
}
