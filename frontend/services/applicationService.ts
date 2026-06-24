import API_URL from "./api";

export async function createApplication(
  data: any
) {

  const response = await fetch(
    `${API_URL}/applications`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Application submission failed"
    );
  }

  return response.json();
}