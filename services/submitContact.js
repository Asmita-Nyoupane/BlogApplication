export async function submitContactForm(data) {
  try {
    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.text();
  } catch (error) {
    throw new Error("Error submitting form:", error);
  }
}
