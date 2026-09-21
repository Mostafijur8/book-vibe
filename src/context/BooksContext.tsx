"use client";

import { IBook } from "../../public/type/bookType";

import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: Dispatch<SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);

  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const shareData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={shareData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
