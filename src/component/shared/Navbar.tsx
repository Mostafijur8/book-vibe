import Link from "next/link";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Books",
    href: "/books",
  },
  {
    name: "Listed Books",
    href: "/listedBooks",
  },
  {
    name: "Read Books",
    href: "/read-books",
  },
{
  name:"About",
  href:"/about",
}
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-md backdrop-blur-xl">
      <div className="navbar container mx-auto min-h-16 px-4 sm:px-6 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-1 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile Navigation */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-56 rounded-2xl border border-gray-200 bg-white p-3 text-gray-700 shadow-xl"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-xl transition hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-1 shadow-md shadow-emerald-500/20">
              <img
                src="/assets/logo/book.ico"
                alt="Book Vibe Logo"
                className="h-7 w-7"
              />
            </div>

            <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Book{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Vibe
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1 font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-xl px-4 text-gray-600 transition duration-300 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Authentication Buttons */}
        <div className="navbar-end gap-2">
          {/* Sign In */}
          <Link
            href="/login"
            className="btn btn-outline rounded-xl border-emerald-500 px-4 text-emerald-600 transition duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
          >
            Sign In
          </Link>

          {/* Sign Up */}
          <Link
            href="/register"
            className="btn rounded-xl border-0 bg-gradient-to-r from-emerald-500 to-teal-500 px-5 font-semibold text-white shadow-md shadow-emerald-500/20 transition duration-300 hover:scale-105 hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
