export function Nav({ activePage, setActivePage }) {
  const navItems = ["Rooms", "Friends", "Accountability"];

  return (
    <nav class="bg-gray-800 text-white shadow-md">
      <div class="container mx-auto px-4">
        <ul class="flex justify-center space-x-8 py-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                class={`text-lg transition-colors duration-200 hover:text-blue-400 ${
                  activePage === item.toLowerCase()
                    ? "font-bold text-blue-400 border-b-2 border-blue-400 pb-1"
                    : "text-gray-300"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item.toLowerCase());
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
