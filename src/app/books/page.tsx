import BookCard from "@/component/shared/BookCard";
import { IBook } from "../../../public/type/bookType";

const getBooks = async (): Promise<IBook[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );

    const books: IBook[] = await res.json();

    return books;
  } catch (error) {
    console.error("getBooks error:", error);
    return [];
  }
};

const Books = async () => {
  const getData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
          Explore Our Collection
        </p>

        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          All Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Discover amazing books, explore new stories, and find your next
          favorite read.
        </p>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
