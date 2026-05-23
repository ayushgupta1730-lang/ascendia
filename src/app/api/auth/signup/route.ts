import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const {
      name,
      email,
      password,
    } = body;

    if (
      !name ||
      !email ||
      !password
    ) {

      return NextResponse.json(
        {
          error:
            "All fields are required.",
        },
        {
          status: 400,
        }
      );

    }

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {

      return NextResponse.json(
        {
          error:
            "User already exists.",
        },
        {
          status: 400,
        }
      );

    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    await prisma.user.create({

      data: {
        name,
        email,
        password:
          hashedPassword,
        isVerified: true,
      },

    });

    return NextResponse.json(
      {
        message:
          "Account created successfully.",
      },
      {
        status: 201,
      }
    );

  } catch (error) {

    console.error(
      "SIGNUP ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong.",
      },
      {
        status: 500,
      }
    );

  }

}