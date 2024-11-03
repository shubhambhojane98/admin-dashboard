"use client";
import { users } from "@/helper/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

interface User {
  name: string;
  email: string;
  phoneNo: string;
  role: string;
  hasActiveMembership: string;
  id: string;
}

const UserTable = ({
  name,
  email,
  role,
  hasActiveMembership,
  phoneNo,
  id,
}: User) => {
  const [userList, setUserList] = useState(users);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error deleting user");
      }

      // Update the local user list to reflect the deletion
      setUserList(userList.filter((user) => user.id !== id));
      alert("User deleted successfully!");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user. Please try again.");
    }
  };

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {name}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{phoneNo}</td>
      <td className="px-6 py-4">{role}</td>
      <td className="px-6 py-4">{hasActiveMembership}</td>
      <td className="px-6 py-4 text-right text-blue-600">
        <Link href={`/admin/editUser/${id}`}>Edit</Link>
      </td>
      <td className="px-6 py-4 text-right">
        <p
          onClick={() => handleDelete(id)}
          className="font-medium text-red-600  hover:underline"
        >
          Delete
        </p>
      </td>
    </tr>
  );
};

export default UserTable;
