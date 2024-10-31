import { NextResponse } from "next/server";

let users = [
  {
    id: "1",
    name: "Shubham",
    email: "shubham@gmail.com",
    phoneNo: "9818127849",
    role: "user",
    hasActiveMembership: "active",
  },
  {
    id: "2",
    name: "Rohan",
    email: "rohan@gmail.com",
    phoneNo: "9818127849",
    role: "admin",
    hasActiveMembership: "inactive",
  },
  {
    id: "3",
    name: "Yash",
    phoneNo: "9818127849",
    email: "yashn@gmail.com",
    role: "user",
    hasActiveMembership: "active",
  },
];

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
