import { NextResponse } from "next/server";
import data from "../../data/index";

export async function GET(request: Request) {
  return NextResponse.json({
    message: "Retrieve Successfully",
    data: {
      events: data.events?.slice(0, 3),
      collections: data.collections.slice(0, 6),
      galleries: data.galleries.slice(0, 6),
    },
  });
}
