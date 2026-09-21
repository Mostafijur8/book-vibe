
"use client";

import { BooksContext } from "@/context/BooksContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const ListedBookPage = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ListedBookPage must be used inside BooksProvider");
  }

  const { readBooks, setReadBooks, wishlist, setWishlist } = context;

  // ================= Sort State =================
  const [readSortBy, setReadSortBy] = useState("default");
  const [wishlistSortBy, setWishlistSortBy] = useState("default");

  // ================= Sort Read Books =================
  const sortedReadBooks = [...readBooks].sort((a, b) => {
    switch (readSortBy) {
      case "rating-high":
        return b.rating - a.rating;

      case "rating-low":
        return a.rating - b.rating;

      case "year-new":
        return b.yearOfPublishing - a.yearOfPublishing;

      case "year-old":
        return a.yearOfPublishing - b.yearOfPublishing;

      case "pages-high":
        return b.totalPages - a.totalPages;

      case "pages-low":
        return a.totalPages - b.totalPages;

      default:
        return 0;
    }
  });

  // ================= Sort Wishlist =================
  const sortedWishlist = [...wishlist].sort((a, b) => {
    switch (wishlistSortBy) {
      case "rating-high":
        return b.rating - a.rating;

      case "rating-low":
        return a.rating - b.rating;

      case "year-new":
        return b.yearOfPublishing - a.yearOfPublishing;

      case "year-old":
        return a.yearOfPublishing - b.yearOfPublishing;

      case "pages-high":
        return b.totalPages - a.totalPages;

      case "pages-low":
        return a.totalPages - b.totalPages;

      default:
        return 0;
    }
  });

  // ================= Remove from Read Books =================
  const handleRemoveRead = (bookId: number) => {
    setReadBooks((prev) =>
      prev.filter((book) => book.bookId !== bookId),
    );

    toast.success("Book removed from Read Books!");
  };

  // ================= Remove from Wishlist =================
  const handleRemoveWishlist = (bookId: number) => {
    setWishlist((prev) =>
      prev.filter((book) => book.bookId !== bookId),
    );

    toast.success("Book removed from Wishlist!");
  };

  return (
    <main className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      {/* ================= Page Header ================= */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
          Your Reading Collection
        </p>

        <h1 className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl">
          My Listed Books
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Manage your read books and wishlist in one place.
        </p>
      </div>

      {/* ================= Tabs ================= */}
      <div className="tabs tabs-lift w-full ">

        {/* ================= Read Books Tab ================= */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab border-b-2 border-transparent font-semibold text-slate-600 transition-all duration-300
          checked:border-emerald-500
          checked:bg-emerald-50
          checked:text-emerald-600"
          aria-label="Read Books "
          defaultChecked
        />

        <div className="tab-content rounded-b-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/30 to-cyan-50/40 p-4 shadow-xl shadow-emerald-100/40 sm:p-6">

          {/* ================= Read Books Header ================= */}
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-2xl font-extrabold text-slate-800">
                Read Books
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {readBooks.length}{" "}
                {readBooks.length === 1 ? "book" : "books"} in your
                reading list.
              </p>
            </div>

            {/* ================= Read Books Sort ================= */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="readSort"
                className="whitespace-nowrap text-sm font-semibold text-slate-600"
              >
                Sort By:
              </label>

              <select
                id="readSort"
                value={readSortBy}
                onChange={(e) => setReadSortBy(e.target.value)}
                className="rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all duration-200 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              >
                <option value="default">Default</option>

                <option value="rating-high">
                  Rating: High → Low
                </option>

                <option value="rating-low">
                  Rating: Low → High
                </option>

                <option value="year-new">
                  Year: Newest → Oldest
                </option>

                <option value="year-old">
                  Year: Oldest → Newest
                </option>

                <option value="pages-high">
                  Pages: High → Low
                </option>

                <option value="pages-low">
                  Pages: Low → High
                </option>
              </select>
            </div>
          </div>

          {/* ================= Read Books List ================= */}
          {readBooks.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-emerald-200 bg-white/70 py-14 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                📚
              </div>

              <p className="text-lg font-bold text-slate-700">
                No read books yet.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Add some books to your read list.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {sortedReadBooks.map((book) => (
                <div
                  key={book.bookId}
                  className="group flex flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/60 sm:flex-row sm:items-center sm:p-5"
                >
                  {/* Image */}
                  <div className="shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 p-2 shadow-inner">
                    <img
                      src={book.image}
                      alt={book.bookName}
                      className="h-40 w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-24"
                    />
                  </div>

                  {/* Book Info */}
                  <div className="flex-1">
                    <h2 className="text-lg font-extrabold text-slate-800 transition-colors duration-300 group-hover:text-emerald-600 sm:text-xl">
                      {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      by{" "}
                      <span className="font-semibold text-slate-700">
                        {book.author}
                      </span>
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-sm">
                      <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-600">
                        ⭐ {book.rating}
                      </span>

                      <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-600">
                        📖 {book.totalPages} Pages
                      </span>

                      <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-600">
                        📅 {book.yearOfPublishing}
                      </span>

                      <span className="rounded-full bg-cyan-50 px-3 py-1 font-semibold text-cyan-600">
                        {book.category}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Link
                      href={`/books/${book.bookId}`}
                      className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-center text-sm font-bold text-white shadow-md shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg"
                    >
                      View Details
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleRemoveRead(book.bookId)}
                      className="rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 px-5 py-2.5 text-sm font-bold text-red-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:from-red-500 hover:to-rose-500 hover:text-white hover:shadow-lg hover:shadow-red-100"
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================= Wishlist Tab ================= */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab border-b-2 border-transparent font-semibold text-slate-600 transition-all duration-300
          checked:border-pink-500
          checked:bg-pink-50
          checked:text-pink-600"
          aria-label="Wishlist"
        />

        <div className="tab-content rounded-b-3xl border border-pink-100 bg-gradient-to-br from-white via-pink-50/20 to-purple-50/30 p-4 shadow-xl shadow-pink-100/30 sm:p-6">

          {/* ================= Wishlist Header ================= */}
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-2xl font-extrabold text-slate-800">
                Wishlist
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {wishlist.length}{" "}
                {wishlist.length === 1 ? "book" : "books"} in your
                wishlist.
              </p>
            </div>

            {/* ================= Wishlist Sort ================= */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="wishlistSort"
                className="whitespace-nowrap text-sm font-semibold text-slate-600"
              >
                Sort By:
              </label>

              <select
                id="wishlistSort"
                value={wishlistSortBy}
                onChange={(e) => setWishlistSortBy(e.target.value)}
                className="rounded-xl border border-pink-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all duration-200 hover:border-pink-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              >
                <option value="default">Default</option>

                <option value="rating-high">
                  Rating: High → Low
                </option>

                <option value="rating-low">
                  Rating: Low → High
                </option>

                <option value="year-new">
                  Year: Newest → Oldest
                </option>

                <option value="year-old">
                  Year: Oldest → Newest
                </option>

                <option value="pages-high">
                  Pages: High → Low
                </option>

                <option value="pages-low">
                  Pages: Low → High
                </option>
              </select>
            </div>
          </div>

          {/* ================= Wishlist List ================= */}
          {wishlist.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-pink-200 bg-white/70 py-14 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-2xl">
                ♡
              </div>

              <p className="text-lg font-bold text-slate-700">
                Your wishlist is empty.
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Add books you want to read later.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {sortedWishlist.map((book) => (
                <div
                  key={book.bookId}
                  className="group flex flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/50 sm:flex-row sm:items-center sm:p-5"
                >
                  {/* Image */}
                  <div className="shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 p-2 shadow-inner">
                    <img
                      src={book.image}
                      alt={book.bookName}
                      className="h-40 w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105 sm:h-32 sm:w-24"
                    />
                  </div>

                  {/* Book Info */}
                  <div className="flex-1">
                    <h2 className="text-lg font-extrabold text-slate-800 transition-colors duration-300 group-hover:text-pink-600 sm:text-xl">
                      {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      by{" "}
                      <span className="font-semibold text-slate-700">
                        {book.author}
                      </span>
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-sm">
                      <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-600">
                        ⭐ {book.rating}
                      </span>

                      <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-600">
                        📖 {book.totalPages} Pages
                      </span>

                      <span className="rounded-full bg-purple-50 px-3 py-1 font-semibold text-purple-600">
                        📅 {book.yearOfPublishing}
                      </span>

                      <span className="rounded-full bg-pink-50 px-3 py-1 font-semibold text-pink-600">
                        {book.category}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Link
                      href={`/books/${book.bookId}`}
                      className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2.5 text-center text-sm font-bold text-white shadow-md shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-pink-600 hover:to-purple-600 hover:shadow-lg"
                    >
                      View Details
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleRemoveWishlist(book.bookId)}
                      className="rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 px-5 py-2.5 text-sm font-bold text-red-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:from-red-500 hover:to-rose-500 hover:text-white hover:shadow-lg hover:shadow-red-100"
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ListedBookPage;
