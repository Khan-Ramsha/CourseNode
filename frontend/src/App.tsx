import React, { useState } from 'react';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import Results from './components/Results';
import { motion } from 'framer-motion';
import { uploadPDF, getCourses } from './services/api';

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (uploadedFile: File) => {
    setFile(uploadedFile);
    setError(null);
    try {
      await uploadPDF(uploadedFile);
    } catch (err) {
      setError('Error uploading file. Please try again.');
      console.error(err);
    }
  };

  const handleGetCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const coursesData = await getCourses();
      setCourses(coursesData);
    } catch (err) {
      setError('Error fetching courses. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGetResources = () => {
    // TODO: Implement getting learning resources
    alert('Getting learning resources... (Not implemented yet)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FileUpload onFileUpload={handleFileUpload} />
          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={handleGetCourses}
              disabled={!file || loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : 'Get Courses'}
            </button>
            <button
              onClick={handleGetResources}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Learning Resources
            </button>
          </div>
        </motion.div>
        {courses.length > 0 && <Results courses={courses} />}
      </main>
    </div>
  );
};

export default App;

