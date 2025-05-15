import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-[#1BAA7D] to-gray-800 text-white min-h-screen grid place-items-center text-center px-4">
      
     
      <img
        src="src/assets/babillito/babillito.png"
        className="max-h-40 max-w-40 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 mb-6"
        alt="Logo Babillito"
      />

      
      <h1 className="text-7xl font-extrabold animate-pulse tracking-widest drop-shadow-lg">
        404
      </h1>
      <h2 className="text-2xl mt-2 font-medium text-gray-200">
        Página no encontrada
      </h2>

     
      <p className="text-lg text-gray-300  max-w-md">
        Lo sentimos, no pudimos encontrar la página que buscas. El enlace al que intentas acceder no esta disponible.
      </p>

     
      <Link
        to="/login"
        className="mt-6 px-6 py-3 bg-[#f97316]  text-white font-semibold rounded-lg hover:bg-[#ea580c] transition-colors duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
