import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user: User = await request.json();

  const updatedUser = await prisma.user.update({
    where: {
      id: +params.id,
    },
    data: {
      ...user,
    },
  });
  return NextResponse.json(updatedUser);
}
