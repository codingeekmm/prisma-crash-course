import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@prisma/client";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user: User = await prisma.user.delete({
    where: {
      id: +params.id,
    },
  });
  return NextResponse.json(user);
}
