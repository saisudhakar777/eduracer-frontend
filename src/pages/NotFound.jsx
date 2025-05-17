
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Return to home page
      </Link>
    </div>
  );
}
