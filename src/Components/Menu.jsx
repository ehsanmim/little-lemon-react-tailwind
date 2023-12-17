export default function Menu() {
  let menu = [
    {
      name: 'Greek breakfast',
      price: '$8.99',
      description:
        'Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries + Granola + Honey.',
      image: 'https://picsum.photos/id/493/800/600',
    },
    {
      name: 'Pear salad',
      price: '$10.99',
      description:
        'Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries + Granola + Honey.',
      image: 'https://picsum.photos/id/999/800/600',
    },
    {
      name: 'Persian Kebab',
      price: '$20.99',
      description:
        'Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries + Granola + Honey.',
      image: 'https://picsum.photos/id/490/800/600',
    },
  ];

  return (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 p-8" id="menu">
        {menu.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
          >
            {/*  <!-- Image --> */}
            <figure>
              <img
                src={item.image}
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="mb-4">
                <h3 className="text-xl font-medium text-slate-700">
                  {item.name}
                </h3>
                <p className=" text-slate-400"> {item.price}</p>
              </header>
              <p>{item.description}</p>
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-6 pt-0">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-yellow-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-yellow-600 focus:bg-yellow-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none">
                <span>Order now!</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
