import { IBook } from "../../../public/type/bookType";
import BookCard from "../shared/BookCard";

const getBook = async (id: string): Promise<IBook> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books data");
    }

    const books: IBook[] = await res.json();

    const book = books.find((book) => book.bookId === Number(id));

    if (!book) {
      throw new Error("Book not found");
    }

    return book;
  } catch (error) {
    console.error("getBook error:", error);
    throw error;
  }
};

const Books = async () => {
  const getData = await getBook();

  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Popular Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Discover amazing books, explore new stories, and find your next
          favorite read.
        </p>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getData.slice(0, 6).map((book: IBook) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
