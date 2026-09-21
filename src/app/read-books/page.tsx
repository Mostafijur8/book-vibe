"use client";

import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "../../../public/type/bookType";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number,
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height),
      )}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadBooks must be used inside BooksProvider");
  }

  const { readBooks } = context;

  const data = readBooks.map((book: IBook, index: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full rounded-3xl border border-emerald-100 bg-white p-4 shadow-lg sm:p-6">
        <h1 className="mb-6 text-2xl font-bold text-emerald-700">
          Read Books
        </h1>

        {readBooks.length === 0 ? (
          <div className="flex h-[300px] items-center justify-center">
            <p className="text-gray-500">
              No books have been added to Read Books yet.
            </p>
          </div>
        ) : (
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  left: 0,
                  bottom: 50,
                }}
              >
                <CartesianGrid />

                <Tooltip
                  cursor={{
                    fill: "#10b981",
                    fillOpacity: 0.08,
                  }}
                />

                <XAxis
                  dataKey="name"
                  angle={-20}
                  textAnchor="end"
                  height={70}
                />

                <YAxis width="auto" />

                <Bar
                  dataKey="uv"
                  shape={TriangleBar}
                  activeBar
                >
                  <LabelList
                    content={CustomColorLabel}
                    position="top"
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadBooks;