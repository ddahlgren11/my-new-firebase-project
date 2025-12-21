import { useLocation } from "preact-iso";

export function Nav() {
  const { url } = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
    { href: "/friends", label: "Friends" },
    { href: "/accountability", label: "Accountability" },
    { href: "/profile", label: "Profile" },
  ];

  const isActive = (href) => {
    if (href === "/") return url === "/";
    return url.startsWith(href);
  };

  return (
    <nav class="bg-gray-900 text-white shadow-md border-b border-gray-800 sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a
                href="/"
                class="font-bold text-xl tracking-tight cursor-pointer hover:text-indigo-400 transition-colors"
            > 
                Procrastinot
            </a>
          </div>
          <div class="flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                class={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
