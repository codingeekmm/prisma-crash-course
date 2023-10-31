import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const aggregations = await prisma.post.aggregate({
    _sum: {
      likeNum: true,
    },
    _avg: {
      likeNum: true,
    },
    _count: {
      id: true,
    },
    _max: {
      likeNum: true,
    },
    _min: {
      likeNum: true,
    },
  });
  // return new Response(JSON.stringify(aggregations));
  return NextResponse.json(aggregations);
}
