const categories = [
  {
    title: 'Decor & Design',
    count: '342 vendors',
    color: 'bg-[#E0F7FA]',
  },
  {
    title: 'Catering & Food',
    count: '289 vendors',
    color: 'bg-[#FFF3E0]',
  },
  {
    title: 'Photography',
    count: '198 vendors',
    color: 'bg-[#EDE7F6]',
  },
  {
    title: 'Entertainment',
    count: '120 vendors',
    color: 'bg-[#F1F8E9]',
  },
];

export const CategoriesSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-title mb-12 text-center text-3xl font-semibold md:text-4xl">
        Explore by Category
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`shadow-elevation-1 hover:shadow-elevation-3 rounded-xl p-6 transition ${cat.color}`}
          >
            <h3 className="mb-2 text-xl font-semibold">{cat.title}</h3>
            <p className="text-muted text-sm">{cat.count}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="bg-primary text-primary-on rounded-full px-8 py-3 font-medium transition hover:opacity-90">
          Browse All Categories
        </button>
      </div>
    </section>
  );
};
