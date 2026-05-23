import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {

  try {

    const { searchParams } =
      new URL(request.url);

    const token =
      searchParams.get("token");

    if (!token) {

      return NextResponse.json(
        {
          error: "Invalid token.",
        },
        {
          status: 400,
        }
      );

    }

    const existingToken =
      await prisma.verificationToken.findUnique({

        where: {
          token,
        },

      });

    if (!existingToken) {

      return NextResponse.json(
        {
          error: "Token not found.",
        },
        {
          status: 400,
        }
      );

    }

    if (
      existingToken.expiresAt <
      new Date()
    ) {

      return NextResponse.json(
        {
          error: "Token expired.",
        },
        {
          status: 400,
        }
      );

    }

    await prisma.user.update({

      where: {
        id: existingToken.userId,
      },

      data: {
        isVerified: true,
      },

    });

    await prisma.verificationToken.delete({

      where: {
        id: existingToken.id,
      },

    });

    return NextResponse.redirect(
      `${process.env.NEXTAUTH_URL}/verified`
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Verification failed.",
      },
      {
        status: 500,
      }
    );

  }

}