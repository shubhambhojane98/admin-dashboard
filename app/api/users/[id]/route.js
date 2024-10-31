import { NextResponse } from "next/server";
import { users } from "@/helper/data";

export async function PUT(req, { params }) {
  const { id } = await params;
  const { name, email, phoneNo, role, hasActiveMembership } = await req.json();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json(
      { error: "User not found" },
      {
        status: 404,
      }
    );
  }

  users[userIndex] = {
    ...users[userIndex],
    name,
    email,
    phoneNo,
    role,
    hasActiveMembership,
  };

  return new NextResponse.json(users[userIndex], {
    status: 200,
  });
}

export async function GET(request, { params }) {
  const { id } = await params;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  users.splice(index, 1);

  return NextResponse.json(
    { message: "User deleted successfully" },
    { status: 200 }
  );
}
