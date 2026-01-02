"use client";

interface ErrorMessageProps {
  error: Error;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-10 max-w-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Data</h1>
        <p className="text-gray-600 mb-2">Failed to load content from the server.</p>
        <p className="text-sm text-gray-500">{error.message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
