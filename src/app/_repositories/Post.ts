import prisma from "@/lib/prisma";

export namespace PostRepository {
  export async function findMany() {
    return await prisma.post.findMany({
      select: {
        title: true,
        author: {
          select: {
            name: true,
          },
        },
        catgories: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
