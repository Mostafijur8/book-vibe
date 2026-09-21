"use client";

import { useContext } from "react";
import { IBook } from "../../../public/type/bookType";
import { BooksContext } from "@/context/BooksContext";
import { toast } from "react-toastify";

interface WishlistButtonProps {
  book: IBook;
}

const WishListButton = ({ book }: WishlistButtonProps) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("WishlistButton must be used inside BooksProvider");
  }

  const { wishlist, setWishlist } = context;

  const isAlreadyWishlisted = wishlist.some(
    (item) => item.bookId === book.bookId
  );

  const handleWishlist = () => {
    if (isAlreadyWishlisted) {
      return;
    }

    setWishlist((prev) => [...prev, book]);

    toast.success(`${book.bookName} added to Wishlist!`);
  };

  return (
    <button
      type="button"
      onClick={handleWishlist}
      disabled={isAlreadyWishlisted}
      className={`rounded-xl px-6 py-3 font-semibold shadow-md transition-all duration-300 ${
        isAlreadyWishlisted
          ? "cursor-not-allowed bg-pink-100 text-pink-700"
          : "border-2 border-pink-500 bg-white text-pink-600 hover:-translate-y-1 hover:bg-pink-50 hover:shadow-lg"
      }`}
    >
      {isAlreadyWishlisted ? "♥ In Wishlist" : "♡ Add to Wishlist"}
    </button>
  );
};

export default WishListButton;