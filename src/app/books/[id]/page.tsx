
import ReadButton from "@/component/bookDetails/ReadButton";
import WishListButton from "@/component/bookDetails/WishListButton";
import { IBook } from "../../../../public/type/bookType";

interface BookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books data");
    }

    const books: IBook[] = await res.json();

    return books;
  } catch (error) {
    console.error("getBooks error:", error);
    return [];
  }
};

const BookDetailsPage = async ({
  params,
}: BookDetailsPageProps) => {
  const { id } = await params;

  // Get all books
  const books = await getBooks();

  // Find the book according to URL id
  const book = books.find(
    (book) => book.bookId === Number(id)
  );

  // If book does not exist
  if (!book) {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-red-500">
          Book not found
        </h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Image */}
          <div className="flex min-h-[500px] items-center justify-center bg-gray-100 p-6 sm:p-8 lg:p-10">
            <img
              src={book.image}
              alt={book.bookName}
              className="max-h-[450px] w-auto rounded-xl object-contain shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 lg:p-10">

            {/* Category */}
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
              {book.category}
            </span>

            {/* Book Name */}
            <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-3 text-lg text-gray-500">
              by{" "}
              <span className="font-semibold text-gray-800">
                {book.author}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-yellow-500">
                  ★
                </span>

                <span className="text-xl font-bold text-gray-800">
                  {book.rating}
                </span>
              </div>

              <span className="text-gray-400">|</span>

              <span className="text-gray-500">
                {book.totalPages} Pages
              </span>
            </div>

            <div className="my-6 border-t border-gray-200" />

            {/* Book Information */}
            <div className="grid grid-cols-2 gap-5">

              <div>
                <p className="text-sm text-gray-400">
                  Publisher
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {book.publisher}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Published
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Category
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {book.category}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Total Pages
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {book.totalPages}
                </p>
              </div>

            </div>

            {/* Tags */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-gray-500">
                Tags
              </p>

              <div className="flex flex-wrap gap-2">
                {(book.tags ?? []).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Review */}
            <div className="mt-7">
              <h2 className="text-xl font-bold text-gray-900">
                Book Review
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {book.review}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ReadButton book={book} />
              <WishListButton book={book} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;

