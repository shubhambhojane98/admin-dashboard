"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [role, setRole] = useState("");
  const [hasActiveMembership, setHasActiveMembership] = useState("");
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      if (id) {
        const res = await fetch(`http://localhost:3000/api/users/${id}`);
        const data = await res.json();

        // Populate each state field individually
        setName(data.name || "");
        setEmail(data.email || "");
        setPhoneNo(data.phoneNo || "");
        setRole(data.role || "");
        setHasActiveMembership(data.hasActiveMembership || false);
      }
    }
    fetchUser();
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const updatedUserData = {
      name,
      email,
      phoneNo,
      role,
      hasActiveMembership,
    };

    await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    });

    router.push("/admin/manageUsers");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Enter Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Enter Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Enter PhoneNo
          </label>
          <input
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter PhoneNo"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Select Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="">--Select an option--</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Select Membership Status
          </label>
          <select
            value={hasActiveMembership}
            onChange={(e) => setHasActiveMembership(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="">--Select an option--</option>
            <option value="active">Active</option>
            <option value="inactive">InActive</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUser;
