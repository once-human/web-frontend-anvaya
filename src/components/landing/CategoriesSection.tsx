const categories = [
  {
    title: 'Decor & Design',
    count: '342 vendors',
  },
  {
    title: 'Catering & Food',
    count: '289 vendors',
  },
  {
    title: 'Photography',
    count: '198 vendors',
  },
  {
    title: 'Entertainment',
    count: '120 vendors',
  },
];

export const CategoriesSection = () => {
  return (
    <section className="bg-surface dark:bg-dark-surface mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-title text-surface-on dark:text-dark-surface-on mb-12 text-center text-3xl font-semibold md:text-4xl">
        Explore by Category
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`shadow-elevation-1 hover:shadow-elevation-3 bg-surface-container-low dark:bg-dark-surface-container-low rounded-3xl p-6 transition`}
          >
            <h3 className="text-surface-on dark:text-dark-surface-on mb-2 text-xl font-semibold">
              {cat.title}
            </h3>
            <p className="text-surface-on-muted dark:text-dark-surface-on-muted text-sm">
              {cat.count}
            </p>
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
