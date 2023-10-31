import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: {
      likeNum: "desc",
    },
  });

  // return new Response(JSON.stringify(posts));
  return NextResponse.json(posts);
}
