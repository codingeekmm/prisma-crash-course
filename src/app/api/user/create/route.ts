import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Body {
  name: string;
  email: string;
}

export async function POST(request: NextRequest) {
  const user: User = await request.json();

  //#### simple create
  const createdUser = await prisma.user.create({
    data: {
      ...user,
    },
  });

  //#### create or connect
  // const createdUser = await prisma.user.create({
  //   data: {
  //     ...user,
  //     posts: {
  //       create: [
  //         {
  //           title: "Crash Course of prisma",
  //           published: true,
  //           catgories: {
  //             connectOrCreate: {
  //               where: {
  //                 id: 3,
  //               },
  //               create: {
  //                 name: "ORM",
  //               },
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  return NextResponse.json(createdUser);

  //### createMany
  //   const users = await prisma.user.createMany({
  //     data: [
  //       { name: "Yewande", email: "yewande@prisma.io" },
  //       { name: "Yewande", email: "yewande@prisma.io" },
  //       { name: "Angelique", email: "angelique@prisma.io" },
  //     ],
  //     skipDuplicates: true,
  //   });
}
