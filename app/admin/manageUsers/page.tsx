import { Button } from "@/components/ui/button";
import UserTable from "@/components/UserTable";
import Link from "next/link";
import React from "react";

const ManageUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <div className=" flex flex-col mb-5 items-end">
        <Button>
          <Link href="/admin/form">Add User</Link>
        </Button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                hasActiveMembership
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: any) => (
              <UserTable
                key={user.id}
                name={user.name}
                email={user.email}
                phoneNo={user.phoneNo}
                role={user.role}
                hasActiveMembership={user.hasActiveMembership}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
