import { NextResponse } from "next/server";
import data from "@/data/index";

export async function GET(request: Request) {
  return NextResponse.json({
    message: "Retrieve artists successfully!",
    data: data?.artists,
  });
}
