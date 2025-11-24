import React from "react";

type Props = {};

export default function Imageupload({}: Props) {
  // post function to upload image with my backend route
  const uploadToBackend = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    // better to check if no file was selected
    if (!files || files.length === 0) return;
    const formData = new FormData();
    fetch("https:://localhost8000", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div>
      <h1>upload the image</h1>
      <input type="file" accept="image/*" />
    </div>
  );
}
