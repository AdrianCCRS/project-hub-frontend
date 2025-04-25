import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import backgroundImage from "../assets/Background_Login.jpg";
import CLogin from "../components/CLogin";

const Login = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  if (!imageLoaded) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <p className="text-white text-lg">Cargando...</p>
      </div>
    );
  }

  return (
    <div className='bg-gradient-to-r from-gray-900 via-[#1BAA7D] to-gray-800 text-white flex items-center justify-center min-h-screen'>
        <CLogin/>
    </div>
  );
};

export default Login;
