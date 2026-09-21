"use client";

import { useContext } from "react";
import { IBook } from "../../../public/type/bookType";
import { BooksContext } from "@/context/BooksContext";
import { toast } from "react-toastify";

interface ReadButtonProps {
  book: IBook;
}

const ReadButton = ({ book }: ReadButtonProps) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadButton must be used inside BooksProvider");
  }

  const { readBooks, setReadBooks } = context;

  const isAlreadyRead = readBooks.some((item) => item.bookId === book.bookId);

  const handleReadBook = () => {
    if (isAlreadyRead) {
      toast.info("This book is already in your Read Books!");
      return;
    }

    setReadBooks((prev) => [...prev, book]);

    toast.success(`${book.bookName} added to Read Books!`);
  };

  return (
    <button
      type="button"
      onClick={handleReadBook}
      disabled={isAlreadyRead}
      className={`rounded-xl px-6 py-3 font-semibold shadow-md transition-all duration-300 ${
        isAlreadyRead
          ? "cursor-not-allowed bg-green-100 text-green-700"
          : "bg-green-600 text-white hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg"
      }`}
    >
      {isAlreadyRead ? "✓ Already Read" : "📖 Add to Read"}
    </button>
  );
};

export default ReadButton;
