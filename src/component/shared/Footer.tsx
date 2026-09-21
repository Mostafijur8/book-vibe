import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-white text-slate-600 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-slate-900"
            >
              Book<span className="text-emerald-500">Vibe</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Discover your next favorite book, explore new stories, and build
              your personal bookshelf with BookVibe.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <FaGithub size={14} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
              >
                <FaTwitter size={14} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Explore
            </h3>

            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="transition hover:text-emerald-500">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition hover:text-emerald-500"
                >
                  All Books
                </Link>
              </li>

              <li>
                <Link
                  href="/listedBooks"
                  className="transition hover:text-emerald-500"
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-emerald-500"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Resources
            </h3>

            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-emerald-500"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  className="transition hover:text-emerald-500"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-emerald-500"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-emerald-500"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Stay Updated
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Get book recommendations and the latest updates in your inbox.
            </p>

            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-l-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-400"
              />

              <button className="rounded-r-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} BookVibe. All rights reserved.</p>

          <p>
            Made with <span className="text-emerald-500">♥</span> for book
            lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
