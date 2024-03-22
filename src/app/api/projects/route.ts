import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req: Request) => {
  try {
    const prisma = new PrismaClient();

    const projects = await prisma.projects.findMany({});

    if (!projects)
      return NextResponse.json({ message: "No link found !" }, { status: 422 });

    return NextResponse.json(projects, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error ! " }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const prisma = new PrismaClient();

    const { name, image, description, tags, source_code, demo } =
      await req.json();

    if (!name || !image || !description || !tags)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });

    const projects = await prisma.projects.create({
      data: {
        name: name,
        image: image,
        description: description,
        tags: Array.isArray(tags) ? tags : tags.split(" "),
        source_code: source_code,
        demo: demo,
      },
    });

    return NextResponse.json(projects, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error ! " + error },
      { status: 500 }
    );
  }
};
