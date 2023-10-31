import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const groupPosts = await prisma.post.groupBy({
    by: ["authorId"],
    _sum: {
      likeNum: true,
    },
    _avg: {
      likeNum: true,
    },
    _count: {
      likeNum: true,
    },
  });
  // return new Response(JSON.stringify(groupPosts));
  return NextResponse.json(groupPosts);
}
