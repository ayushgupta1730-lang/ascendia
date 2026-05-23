import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const message =
      body.message
        ?.toLowerCase() || "";

    let response = "";

    // AI ENGINEER

    if (
      message.includes("ai engineer") ||
      message.includes("artificial intelligence")
    ) {

      response = `
1. Learn Python fundamentals.
2. Master DSA and problem solving.
3. Learn Machine Learning basics.
4. Build projects using AI APIs.
5. Learn React + Full Stack development.
6. Practice internships and hackathons.
7. Build strong LinkedIn + GitHub profiles.

Focus on consistency and real projects.
      `;

    }

    // COLLEGE COMPARISON

    else if (
      message.includes("graphic era") &&
      message.includes("acropolis")
    ) {

      response = `
Graphic Era has stronger national reputation,
better placements,
and stronger tech exposure.

Acropolis is more affordable and decent for ROI.

If budget is not a major issue,
Graphic Era is the stronger overall choice.
      `;

    }

    // INTERNSHIPS

    else if (
      message.includes("internship")
    ) {

      response = `
To get internships:

• Build 2-3 strong projects
• Learn React or AI tools
• Practice DSA regularly
• Optimize LinkedIn profile
• Apply through LinkedIn, Internshala, Wellfound
• Participate in hackathons

Consistency matters more than perfection.
      `;

    }

    // ROADMAP

    else if (
      message.includes("roadmap")
    ) {

      response = `
Roadmap:

1. Learn HTML, CSS, JavaScript
2. Learn React + Next.js
3. Learn backend development
4. Build real-world projects
5. Learn databases + APIs
6. Deploy projects
7. Prepare DSA for placements
8. Apply for internships consistently
      `;

    }

    // DEFAULT

    else {

      response = `
Ascendia AI recommends focusing on:

• strong technical skills
• real-world projects
• internships
• communication
• consistency

Keep building and improving daily.
      `;

    }

    return NextResponse.json({
      response,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          "AI request failed.",
      },
      {
        status: 500,
      }
    );

  }

}