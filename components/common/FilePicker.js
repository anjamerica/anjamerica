import React, { useRef, useState } from "react";

export default function FilePicker({
  value,
  setFiles,
  error = null,
  acceptedFiles = ["application/pdf"],
  maxSizeMB = 2,
}) {
  const [localError, setLocalError] = useState(null);
  const isError = error || localError;
  const inputFileRef = useRef();

  const handleOpenFilePicker = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!acceptedFiles.includes(file.type)) {
        setLocalError({ message: "Only PDF files are supported." });
        return;
      }
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        setLocalError({
          message: `File size must be less than ${maxSizeMB} MB.`,
        });
        return;
      }

      setLocalError(null);
      setFiles(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple={false}
        className="hidden"
        ref={inputFileRef}
        accept={acceptedFiles.join(",")}
        onChange={(e) => handleFileChange(e)}
      />
      <div
        className={`w-full flex items-center yellow-border-input-rounded p-2 ${
          isError && "border border-solid border-[#D12E34]"
        }`}
      >
        <div
          onClick={handleOpenFilePicker}
          className="w-fit py-1 px-4 yellow-border-input-rounded whitespace-nowrap text-md cursor-pointer"
        >
          Choose file
        </div>
        <span className="pl-2 text-md w-[300px] truncate">
          {value ? value.name : "No file chosen"}
        </span>
      </div>
      {isError && (
        <p className="text-[#D12E34] text-md font-normal leading-[23px] mt-2">
          {error?.message || localError?.message}
        </p>
      )}
    </div>
  );
}
