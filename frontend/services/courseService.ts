import API_URL from "./api";

export async function getCourses() {
  try {
    const response = await fetch(
      `${API_URL}/courses`,
      {
        cache: "no-store",
      }
    );

    console.log("Response status:", response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error(text);
      throw new Error("Failed to fetch courses");
    }

    return response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}

export async function getCourseById(id: string) {
  try {
    const response = await fetch(
      `${API_URL}/courses/${id}`,
      {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Course not found");
  }

    return response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
}