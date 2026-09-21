
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-600">
              About BookVibe
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              A place where{" "}
              <span className="text-emerald-500">books</span> meet readers.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              BookVibe is a simple and beautiful platform for discovering
              books, exploring new stories, and keeping track of the books
              you want to read.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 shadow-xl sm:p-10">
              <div className="rounded-2xl bg-white p-7 shadow-lg sm:p-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                    📚
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Your Reading Space
                    </h3>

                    <p className="text-sm text-slate-500">
                      Discover • Read • Enjoy
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="h-3 w-full rounded-full bg-slate-100">
                    <div className="h-3 w-4/5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="h-3 w-3/4 rounded-full bg-slate-100" />

                  <div className="h-3 w-5/6 rounded-full bg-slate-100" />
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-emerald-50 p-4 text-center">
                    <p className="text-xl font-bold text-emerald-600">100+</p>
                    <p className="mt-1 text-xs text-slate-500">Books</p>
                  </div>

                  <div className="rounded-xl bg-teal-50 p-4 text-center">
                    <p className="text-xl font-bold text-teal-600">50+</p>
                    <p className="mt-1 text-xs text-slate-500">Authors</p>
                  </div>

                  <div className="rounded-xl bg-sky-50 p-4 text-center">
                    <p className="text-xl font-bold text-sky-600">24/7</p>
                    <p className="mt-1 text-xs text-slate-500">Access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-5 -right-5 -z-10 h-24 w-24 rounded-full bg-emerald-100 blur-2xl" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for people who love to read
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              Finding a great book should feel exciting, not complicated.
              BookVibe was created to make discovering and organizing books
              easier for everyone.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Whether you are looking for your next adventure, a thoughtful
              novel, or something new to learn, BookVibe helps you explore
              books and keep your reading journey organized.
            </p>

            <Link
              href="/books"
              className="mt-8 inline-flex items-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-600 hover:shadow-md"
            >
              Explore Books
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
              Why BookVibe
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything you need for your reading journey
            </h2>

            <p className="mt-4 text-slate-600">
              Simple tools designed to make your reading experience more
              enjoyable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                🔍
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Discover Books
              </h3>

              <p className="mt-3 leading-6 text-slate-500">
                Explore a collection of interesting books and discover your
                next favorite read.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-2xl">
                ❤️
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Build Your List
              </h3>

              <p className="mt-3 leading-6 text-slate-500">
                Keep track of the books you are interested in and create your
                own reading list.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl">
                ⭐
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Read Reviews
              </h3>

              <p className="mt-3 leading-6 text-slate-500">
                Learn more about books through reviews, ratings, and useful
                information before you choose your next read.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-12 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                100+
              </p>
              <p className="mt-2 text-sm text-slate-400">Books</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                50+
              </p>
              <p className="mt-2 text-sm text-slate-400">Authors</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                10+
              </p>
              <p className="mt-2 text-sm text-slate-400">Categories</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                24/7
              </p>
              <p className="mt-2 text-sm text-slate-400">Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-emerald-50 px-6 py-12 text-center sm:px-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Ready to find your next book?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Explore our collection and start building your perfect reading
            list today.
          </p>

          <Link
            href="/books"
            className="mt-7 inline-flex rounded-lg bg-emerald-500 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-600 hover:shadow-md"
          >
            Browse Books
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
