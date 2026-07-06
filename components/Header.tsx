import Logo from "./Logo";

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О нас" },
  { href: "/delivery", label: "Доставка" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 transition hover:text-brand-600"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="/catalog" className="btn-primary !py-2 !px-4 text-sm">
          В корзину 🛒
        </a>
      </div>
    </header>
  );
}
