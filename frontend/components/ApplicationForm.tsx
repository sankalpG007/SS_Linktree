"use client";

import { useState } from "react";
import { createApplication } from "../services/applicationService";
import { useRouter } from "next/navigation";
interface Props {
  courseId: number;
}

export default function ApplicationForm({
  courseId,
}: Props) {

    const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    current_year: "",
    city: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      const result =
        await createApplication({
          ...formData,
          course_id: courseId,
        });

      console.log(result);

      router.push("/success");

    } catch (error) {

      console.error(error);

      alert("Submission Failed");

    }

    setLoading(false);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        required
        className="w-full border rounded-xl p-4"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full border rounded-xl p-4"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
        className="w-full border rounded-xl p-4"
      />

      <input
        type="text"
        name="college"
        placeholder="College Name"
        onChange={handleChange}
        required
        className="w-full border rounded-xl p-4"
      />

      <input
        type="text"
        name="current_year"
        placeholder="Current Year"
        onChange={handleChange}
        required
        className="w-full border rounded-xl p-4"
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
        required
        className="w-full border rounded-xl p-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-4 rounded-xl"
      >
        {loading
          ? "Submitting..."
          : "Submit Application"}
      </button>

    </form>
  );
}