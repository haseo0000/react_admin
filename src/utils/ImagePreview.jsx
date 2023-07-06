import { useEffect, useState } from "react";

export function ImagePreview() {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const readerFile = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    let fileReader;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      if (fileReader) {
        fileReader.abort();
      }
    };
  }, [file]);

  return {
    readerFile,
    fileDataURL,
  };
}
