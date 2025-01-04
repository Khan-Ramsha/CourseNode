import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
  });

  return (
    <div className="mt-8 w-full">

      <div
        {...getRootProps()}
        className={`max-w-2xl mx-auto border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition duration-300 ease-in-out ${
    isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'
        }`}
      >
        <input {...getInputProps()} />
        <FaCloudUploadAlt className="text-5xl text-blue-500 mx-auto mb-4" />
        <p className="text-gray-600">
          {isDragActive
            ? 'Drop the PDF here'
            : "Drag and drop a PDF file here, or click to select one"}
        </p>
      </div>
      {acceptedFiles.length > 0 && (
        <div className="mt-4 text-center">
          <p className="text-green-600">
            File uploaded: {acceptedFiles[0].name}
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;

