import { NextResponse } from "next/server";
import { users } from "@/helper/data";

export async function GET() {
  return NextResponse.json(users, {
    status: 200,
  });
}

export async function POST(req) {
  const { name, email, phoneNo, role, hasActiveMembership } = await req.json();
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    phoneNo,
    role,
    hasActiveMembership,
  };
  users.push(newUser);

  return NextResponse.json(newUser, {
    status: 201,
  });
}
