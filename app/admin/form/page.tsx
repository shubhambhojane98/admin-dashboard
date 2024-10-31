"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [role, setRole] = useState("");
  const [hasActiveMembership, setHasActiveMembership] = useState("");
  const router = useRouter();

  const handleBlur = () => {
    if (phoneNo.length !== 10) {
      alert("Mobile number must be exactly 10 digits.");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const newUser = {
        name: name,
        email: email,
        phoneNo: phoneNo,
        role: role,
        hasActiveMembership: hasActiveMembership,
      };
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      console.log(response);
      const data = await response.json();
      router.push("/admin/manageUsers");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Enter Name
          </label>
          <input
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

export default Form;
