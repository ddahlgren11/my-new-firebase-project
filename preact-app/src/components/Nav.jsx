export function Nav({ activePage, setActivePage }) {
  const navItems = ["Rooms", "Friends", "Accountability"];

  return (
    <nav class="bg-gray-800 text-white p-4">
      <ul class="flex space-x-4">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              class={`hover:text-gray-300 ${
                activePage === item.toLowerCase() ? "font-bold" : ""
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
    </nav>
  );
}
