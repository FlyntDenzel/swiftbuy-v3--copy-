import Product from "../../(models)/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("POST ran");
  try {
    const body = await req.json();
    const productData = body.formData;
    await Product.create(productData);

    return NextResponse.json({ message: "Product Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const products = await Product.find();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
