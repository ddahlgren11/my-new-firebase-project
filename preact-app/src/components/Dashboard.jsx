import { h } from 'preact';

export function Dashboard({ setActivePage }) {
  const cards = [
    {
      id: 'rooms',
      title: 'Rooms',
      description: 'Join or create focus rooms to work together.',
      color: 'bg-indigo-500',
      icon: '🏠'
    },
    {
      id: 'friends',
      title: 'Friends',
      description: 'See what your friends are up to and connect.',
      color: 'bg-emerald-500',
      icon: '👥'
    },
    {
      id: 'accountability',
      title: 'Accountability',
      description: 'Track progress and nudge your accountability partners.',
      color: 'bg-amber-500',
      icon: '🔥'
    }
  ];

  return (
    <div class="container mx-auto p-6">
      <header class="mb-10 text-center">
        <h1 class="text-4xl font-extrabold text-white mb-2">Welcome Back!</h1>
        <p class="text-gray-400 text-lg">Choose where you want to go today.</p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActivePage(card.id)}
            class="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700"
          >
            <div class={`${card.color} p-4 flex justify-center items-center h-24`}>
              <span class="text-5xl">{card.icon}</span>
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-bold text-white mb-2">{card.title}</h2>
              <p class="text-gray-300">{card.description}</p>
              <div class="mt-4 flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300">
                Launch {card.title} <span class="ml-2">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
