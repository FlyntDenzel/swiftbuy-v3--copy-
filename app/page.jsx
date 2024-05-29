import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./components/Header";
import { FaArrowRightLong } from "react-icons/fa6";
import Display from "./components/Display";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/Products", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get ticket", error);
  }
}

const HomePage = async () => {
  const { products } = await getData();
  // const uniqueCategories = [
  //   ...new Set(products?.map(({ category }) => category)),
  // ];

  return (
    <div className="border m-3 p-3 rounded-md ">
      <Header />

      <div className="max-sm:hidden border p-3 m-3 rounded-md grid grid-cols-3 ">
        {products.map((product) => (
          <Link href={`/${product._id}`} key={product._id} className="mb-3">
            <div className="border rounded-md m-3 p-3">
              <h1>{product.title}</h1>
              <div className="flex justify-between items-center">
                <h1 className="">{product.price} XAF</h1>
                <button className="button_price">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="sm:hidden border p-3 m-3 rounded-md grid grid-cols-1">
        {products.map((product) => (
          <Link href={`/${product.title}`} key={product._id} className="mb-3">
            <div className="border rounded-md m-3 p-3">
              <h1 className="text-center mt-2 ">{product.title}</h1>
              <div className="flex justify-between items-center">
                <h1 className="">{product.price} XAF</h1>
                <button className="button_price">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop Navigation */}
      {/* <div className="max-sm:hidden border p-3 m-3 rounded-md grid grid-cols-3 ">
        {products.map((product) => (
          <Link href={`/${product.name}`} className="mb-3" key={product.id}>
            <div className="border p-3 m-3 rounded-md h-full">
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.name}
                className="w-full rounded-md"
              />
              <h1 className="my-3">{product.name}</h1>
              <div className="flex justify-between items-center">
                <h1 className="">{product.price} XAF</h1>
                <button className="button_price">
                  <FaArrowRightLong />
                </button>
              </div>
              <div className="flex justify-center mt-3">
              </div>
            </div>
          </Link>
        ))}
      </div> */}

      {/* Mobile Navigation */}
      {/* <div className="sm:hidden p-3 m-3 rounded-md grid grid-cols-1">
        {products.map((product) => (
          <Link href={`/${product.name}`} className="">
            <div className="border p-3 m-3 rounded-md">
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.name}
                className="w-full rounded-md"
              />
              <div className="justify-between items-center">
                <h1 className="text-center my-3 font-bold">{product.name}</h1>
                <h1 className="text-center my-3">{product.price} XAF</h1>
              </div>
              <div className="flex justify-center my-3">
                <button className="button_price">
                <FaArrowRightLong />
                  
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
