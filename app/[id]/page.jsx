import Link from "next/link";
import React from "react";

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
    <div className="border m-3 p-3 rounded-md">
      <h1>Product Page: {id}</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.mobile}</h2>
          {/* <p>{product.}</p> */}
          <p>
            {product.description}.
            <br />
            <span className="mt-3">{product.price}XAF</span>
          </p>
          <div className="card-actions justify-end">
            <Link href={`https://wa.me/676112803`} className="btn btn-primary">Contact Owner</Link>
          </div>
        </div>
      </div>
      {/* {product.price} */}
    </div>
  );
};

export default ProductPage;
