import React, { useState } from "react";

type Props = {};

export default function Imageupload({}: Props) {
  // state for later function that checks if the user file is an image file
  const [allow, setAllow] = useState(false);
  s;
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
  // check if user uses correct format and has selected an image
  //::TODO: find the file type
  const submitFunction = (file: any) => {
    if (!file) {
      throw new Error("Pls choose an Image");
    } else if (file.includes(".jpg")) {
      setAllow(true);
    }
  };

  return (
    <div>
      <h1>upload the image</h1>
      <input type="file" accept="image/*" />
      <p>Upload the Image of the product you want so search for</p>
      <button onClick={submitFunction} type="submit"></button>
    </div>
  );
}
