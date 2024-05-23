import Product from "@/app/(models)/Product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
