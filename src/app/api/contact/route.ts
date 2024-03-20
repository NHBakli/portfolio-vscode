import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const POST = async (req: Request) => {
  try {
    const prisma = new PrismaClient();

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });

    const contact = await prisma.contact.create({
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    });

    return NextResponse.json({ contact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error ! " }, { status: 500 });
  }
};
