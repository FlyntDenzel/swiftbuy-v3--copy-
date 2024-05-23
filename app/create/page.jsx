"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePage = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // console.log("submitted");
    e.preventDefault();
    const res = await fetch("/api/Products", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create product");
    }

    router.refresh();
    router.push("/");
  };

  const startingProductData = {
    title: "",
    description: "",
    mobile: "",
    price: "",
  };

  const [formData, setFormData] = useState(startingProductData);
  return (
    <div className="flex justify-center border p-3 rounded-md">
      <form
        action=""
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold">Create Product</h3>
        <label>Prod Name</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
          className="text-black"
        />
        <label>Prod Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
          className="text-black"
        />
        <label>Phone Number</label>
        <input
          type="number"
          name="mobile"
          id="mobile"
          onChange={handleChange}
          value={formData.mobile}
          className="text-black"
        />
        <label>Product Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          value={formData.price}
          className="text-black"
        />

        <input
          type="submit"
          value="Create"
          className="border rounded-full cursor-pointer"
        />
      </form>
    </div>
  );
};

export default CreatePage;
