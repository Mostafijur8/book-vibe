import Link from "next/link";
import { IBook } from "../../../public/type/bookType";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-100 p-5">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-full w-auto object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <span>★</span>
            <span className="font-semibold">{book.rating}</span>
          </div>

          <span className="text-sm text-gray-400">
            • {book.totalPages} pages
          </span>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Published</p>

            <p className="text-sm font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          {/* Dynamic Route */}
          <Link
            href={`/books/${book.bookId}`}
            className="btn btn-success btn-sm rounded-lg px-4 font-semibold transition duration-300 hover:scale-105"
          >
            View Details
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
