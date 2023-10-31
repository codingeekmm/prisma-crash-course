// import prisma from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function GET() {
//   // const posts = await prisma.post.findMany({
//   //   where: {
//   //     OR: [
//   //       {
//   //         title: {
//   //           contains: "github",
//   //           mode: "insensitive",
//   //         },
//   //       },
//   //       {
//   //         title: {
//   //           contains: "Twitter",
//   //         },
//   //       },
//   //     ],
//   //     AND: {
//   //       published: true,
//   //     },
//   //   },
//   // });
//   //find all posts which their author name is not "Jack" and the author email is started with "s"

//   const posts = await prisma.post.findMany({
//     where: {
//       author: {
//         isNot: {
//           name: "Jack",
//         },
//         is: {
//           email: {
//             startsWith: "s",
//           },
//         },
//       },
//     },
//     select: {
//       title: true,
//       author: {
//         select: {
//           name: true,
//         },
//       },
//     },
//   });

//   return NextResponse.json(posts);
// }

import { PostRepository } from "@/app/_repositories/Post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await PostRepository.findMany();
    return NextResponse.json(posts);
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
