import React from "react";

interface User {
  name: string;
  email: string;
  phoneNo: string;
  role: string;
  hasActiveMembership: string;
}

const UserTable = ({
  name,
  email,
  role,
  hasActiveMembership,
  phoneNo,
}: User) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{phoneNo}</td>
      <td className="px-6 py-4">{role}</td>
      <td className="px-6 py-4">{hasActiveMembership}</td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default UserTable;
