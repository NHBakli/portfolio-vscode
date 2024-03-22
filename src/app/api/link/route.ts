import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async (req: Request) => {
  try {
    const prisma = new PrismaClient();

    const socialLink = await prisma.link.findMany({});

    if (!socialLink)
      return NextResponse.json({ message: "No link found !" }, { status: 422 });

    return NextResponse.json(socialLink, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error ! " }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const prisma = new PrismaClient();

    const { social, link, href } = await req.json();

    if (!social || !link || !href)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });

    const socialLink = await prisma.link.create({
      data: {
        social: social,
        link: link,
        href: href,
      },
    });

    return NextResponse.json(socialLink, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error ! " }, { status: 500 });
  }
};
