import { NextResponse } from "next/server";

let users = [
  {
    id: "1",
    name: "Shubham",
    email: "shubham@gmail.com",
    role: "user",
    hasActiveMembership: true,
  },
  {
    id: "2",
    name: "Rohan",
    email: "rohan@gmail.com",
    role: "admin",
    hasActiveMembership: true,
  },
  {
    id: "3",
    name: "Yash",
    email: "yashn@gmail.com",
    role: "user",
    hasActiveMembership: false,
  },
];

export async function GET() {
  return NextResponse.json(users, {
    status: 200,
  });
}
