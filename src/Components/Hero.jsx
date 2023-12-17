export default function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-gray-600 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pb-12 pt-10 sm:p-10 sm:pb-6">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-yellow-400 sm:text-4xl">
                <span className="block">Little Lemon</span>
                <span className="block">Chicago</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-200">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <a
                href="#reservation"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-yellow-400 px-5 py-3 text-base font-medium text-black shadow hover:bg-indigo-50"
              >
                Reserve a table
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
