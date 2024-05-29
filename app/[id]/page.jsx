import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import header from "@/public/assets/images/header.jpg";

async function getProduct(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/Products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const ProductPage = async ({ params }) => {
  const { id } = params;
  const { product } = await getProduct(id);

  return (
    <div className="border m-3 p-3 rounded-md text-xl ">
      <h1 className="max-sm:hidden text-center font-bold"> {product.title}</h1>
      {/* <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>
            {product.description}.
            <br />
            <span className="mt-3">{product.price}XAF</span>
          </p>
          <div className="card-actions justify-end">
            <Link href={`https://wa.me/${product.mobile}`} className="btn btn-primary flex justify-center items-center">
              <FaWhatsapp />
              Contact Owner
              </Link>
          </div>
        </div>
      </div> */}

      {/* Desktop Navigation */}
      {/* <div className="border m-3 p-3 rounded-md flex justify-center gap-20 bg-white">
        <Image
          src={header}
          width={100}
          height={100}
          className="w-1/3 rounded-md"
        />
        <div className="border border-black rounded-md w-1/2 p-3 bg-black">
          <h1>{product.description}</h1>
        </div>
      </div> */}

      {/* Desktop Navigation */}
      <div className="max-sm:hidden card card-side bg-base-100 shadow-xl mt-3">
        <figure>
          <Image
            src={header}
            alt="Movie"
            width={200}
            height={250}
            className="h-full"
          />
        </figure>
        <div className="card-body bg-black border border-white rounded-br-lg rounded-tr-lg border-l-neutral">
          <h2 className="card-title">{product.description}</h2>
          <p>Retailer's Number: {product.mobile}</p>
          <div className="card-actions justify-end">
            <Link
              href={`https://wa.me/${product.mobile}`}
              className="bg-black border p-3 gap-3 flex justify-center items-center rounded-xl hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FaWhatsapp />
              Contact Owner
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden m-3 rounded-md p-3 flex flex-col">
        <Image
          src={header}
          width={200}
          height={200}
          className="rounded-md w-full"
          alt={product.title}
        />
        <div className="border rounded-md mt-3 p-3 text-center">
          <div className="p-3">
            <h1 className="sm:hidden font-bold">{product.title}</h1>
            <h1>{product.description}</h1>
            <h1>{product.mobile}</h1>
          </div>
          <div className="flex justify-center">
            <Link
              href={`https://wa.me/${product.mobile}`}
              className="border p-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300 flex justify-center items-center gap-2 w-fit"
            >
              Contact Owner
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
