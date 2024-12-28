import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex  justify-center items-center gap-12 bg-gray-100 ">
      <h1 className="text-9xl font-extrabold text-red-700">404</h1>
      <h2 className="text-6xl font-bold text-gray-600 mb-12">Page Not Found</h2>
      <Link 
        to="/" 
        className="bg-green-900 text-white text-xl py-5 px-12 rounded-full outline outline-2 outline-green-700 hover:bg-green-800 hover:outline-green-500 focus:ring-2 focus:ring-red-700 focus:ring-offset-1 transition duration-300 ease-in-out"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;