import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  // const users = await prisma.user.findMany({
  //   where: {
  //     OR: [
  //       {
  //         id: {
  //           not: {
  //             gt: 2,
  //           },
  //         },
  //       },
  //       {
  //         name: {
  //           startsWith: "s",
  //         },
  //       },
  //     ],
  //   },
  // });

  const users = await prisma.user.findMany({
    where: {
      posts: {
        none: {
          published: false,
        },
      },
    },
  });

  // return new Response(JSON.stringify(users));
  return NextResponse.json(users);
}
