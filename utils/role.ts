import { Roles } from "@/types/globals";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const checkRole = async (role: Roles) => {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata.role === "admin") {
    redirect("/admin");
  } else if (sessionClaims?.metadata.role === "user") {
    redirect("/user");
  }
};
