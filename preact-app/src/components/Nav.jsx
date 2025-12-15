export function Nav({ activePage, setActivePage }) {
  const navItems = [
    { id: "dashboard", label: "Home" },
    { id: "rooms", label: "Rooms" },
    { id: "friends", label: "Friends" },
    { id: "accountability", label: "Accountability" },
  ];

  return (
    <nav class="bg-gray-900 text-white shadow-md border-b border-gray-800 sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <span
                class="font-bold text-xl tracking-tight cursor-pointer hover:text-indigo-400 transition-colors"
                onClick={() => setActivePage('dashboard')}
            >
                FocusApp
            </span>
          </div>
          <div class="flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                class={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activePage === item.id
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item.id);
                }}
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
