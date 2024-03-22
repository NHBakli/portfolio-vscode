import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

type Props = {
  params: {
    id: string;
  };
};

export const DELETE = async (req: Request, { params }: Props) => {
  try {
    const id = +params.id;

    const prisma = new PrismaClient();

    if (!id) {
      return NextResponse.json({ message: "Invalid Data !" }, { status: 422 });
    }

    const projects = await prisma.projects.delete({
      where: {
        id: +id,
      },
    });

    return NextResponse.json(
      { message: `The projects ${projects.name} is successfully deleted` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error ! ", error },
      { status: 500 }
    );
  }
};
