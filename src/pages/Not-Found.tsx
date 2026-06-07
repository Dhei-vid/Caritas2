import { useNavigate } from "react-router";
import CustomButton from "@/components/custom/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] md:px-20 px-5 py-16 text-center">
      <p className="text-8xl font-black text-primary-500 mb-4">404</p>
      <h1 className="font-black uppercase text-3xl md:text-4xl text-gray-800 mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-500 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <CustomButton title="Go back home" onClick={() => navigate("/")} style="px-8 py-3" />
    </main>
  );
};

export default NotFound;
