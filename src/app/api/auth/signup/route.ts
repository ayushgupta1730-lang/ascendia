import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

import crypto from "crypto";

import { prisma } from "@/lib/prisma";

import { sendVerificationEmail } from "@/lib/mail";

export async function POST(request: Request) {

  try {

    const body = await request.json();

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
          error: "All fields are required.",
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
          error: "User already exists.",
        },
        {
          status: 400,
        }
      );

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await prisma.user.create({

        data: {
          name,
          email,
          password: hashedPassword,
        },

      });

    const verificationToken =
      crypto.randomBytes(32).toString("hex");

    await prisma.verificationToken.create({

      data: {

        token: verificationToken,

        userId: user.id,

        expiresAt: new Date(
          Date.now() + 1000 * 60 * 60
        ),

      },

    });

    await sendVerificationEmail({

      email: user.email,

      name: user.name || "Student",

      token: verificationToken,

    });

    return NextResponse.json(
      {
        message:
          "Account created. Verification email sent.",
      },
      {
        status: 201,
      }
    );

  } catch (error) {

    console.error("SIGNUP ERROR:", error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );

  }

}