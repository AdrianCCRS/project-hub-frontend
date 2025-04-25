import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 py-24 bg-gradient-to-b from-black via-[#00e6771f] to-[#00e677]">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-['Baloo_Thambi_2'] mb-4">
            ¡Bienvenido a <br /> Project Hub UIS!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Un espacio hecho para estudiantes curiosos y creativos de la UIS.
          </p>
        </div>
        
        <img 
          src="public/landing_babillito_nobg.png" 
          alt="Mascota Babillito saludando" 
          className="w-1/2 md:w-1/3 max-w-xs animate-float" 
        />
      </div>

      {/* Call to Action */}
      <div className="w-full bg-[#00e676] py-8 px-4 flex flex-col md:flex-row items-center justify-around gap-4">
        <p className="text-2xl font-bold text-black">
          ¡Muéstranos tu mejor proyecto! 🐊
        </p>
        
        <div className="flex gap-4">
          <NavLink
            to="/register" 
            className="px-8 py-3 text-white font-semibold bg-[#1d201f] rounded-lg hover:bg-[#5c5f5c] transition-colors"
          >
            Registrarse
          </NavLink>
          <NavLink
            to="/login" 
            className="px-8 py-3 text-white font-semibold bg-[#1d201f] rounded-lg hover:bg-[#5c5f5c] transition-colors"
          >
            Log-in
          </NavLink>
        </div>
      </div>

      {/* Community Section */}
      <div className="w-full bg-[#00e676] py-12 px-4 flex flex-col md:flex-row items-center justify-around gap-8">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl font-['Baloo_Thambi_2'] text-black mb-4">
            Trabaja en comunidad
          </h1>
          <p className="text-xl md:text-2xl text-black">
            Trabaja en conjunto tu próximo proyecto
          </p>
        </div>
        
        <img 
          src="public/babillito_groups.png" 
          alt="Mascota Babillito en grupo" 
          className="w-1/2 md:w-1/4 bg-[#03582f] rounded-lg" 
        />
      </div>
    </div>
  );
};

export default LandingPage;