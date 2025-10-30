export const uploadDocument = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:5001/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to upload");
  return await response.json();
};
