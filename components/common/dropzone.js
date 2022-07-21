//*Dropzone.js*//

import React from "React";
import { useDropzone } from "React-dropzone";

function Dropzone({ open }) {
  const { getRootProps, getInputProps } = useDropzone({});
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <p className="dropzone-content">Drop files here or click...</p>
      </div>
    </div>
  );
}

export default Dropzone;
