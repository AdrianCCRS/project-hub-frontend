import React from 'react'
import { useState } from 'react';

export default function CLogin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
   
    <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <div class="text-center mb-6">
            <img src="src\assets\phlogo.svg" className="mx-auto mb-4 text-white w-24 h-24" alt="Project-Hub Logo" />
        </div>
        
        <h2 className="text-3xl font-semibold text-center mb-6">Iniciar Sesión</h2>
        <form id="loginForm">
            <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
                <input type="email" id="email" name="email" placeholder="Introduce tu correo" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            </div>

            <div className="mb-6 relative">
                <label for="password" className="block text-sm font-medium text-gray-300">Contraseña</label>
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Introduce tu contraseña" class="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                
                
                <button type="button" onClick={() => setShowPassword(!showPassword)} class="absolute top-1/2 right-3 transform -translate-y-1/2 mt-4">
                
                <img id="toggle-icon" src={
                showPassword
                  ? 'https://img.icons8.com/ios/50/ffffff/visible.png'
                  : 'https://img.icons8.com/ios/50/ffffff/invisible.png'
              } alt="Mostrar/Ocultar contraseña" className="w-6 h-6"/>
                
                </button>
            </div>

            <button type="submit" className="w-full py-3 px-4 bg-[#1BAA7D] hover:bg-[#1bc632] text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-[#1BAA7D] mb-4">
                Iniciar Sesión
            </button>
        </form>

        <div className="text-center">
            <p className="text-sm text-gray-400">
                ¿No tienes cuenta? <a href="../register/register.html" className="text-[#1bc632] hover:underline">Regístrate aquí</a>
            </p>
        </div>
    </div>
    
</>
  )
}
