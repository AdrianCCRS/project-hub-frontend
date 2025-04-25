import React,{useState} from 'react';

export default function CRegister() {
    const [showPassword, setShowPassword] = useState(false);
     // Lista de programas
     const programas = ["Ingeniería de Sistemas", "Ingeniería de Petroleos", "Ingeniería Industrial", 
        "Ingeniería Química", "Ingeniería Electrónica", "Ingeniería Mecánica", 
        "Ingeniería Civil", "Ingeniería Ambiental", "Ingeniería Biomédica", 
        "Ingeniería Eléctrica"];
  return (
    <>
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg mt-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Regístrate</h2>
        <form id="registerForm">
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-lg font-bold text-gray-300">Nombres</label>
            <input type="text" id="firstname" name="firstname" placeholder="Introduce tu nombre" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div className="mb-4">
            <label htmlFor="lastname" className="block text-lg font-bold text-gray-300">Apellidos</label>
            <input type="text" id="lastname" name="lastname" placeholder="Introduce tu apellido" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold text-gray-300">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="Introduce tu correo" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-lg font-bold text-gray-300">Contraseña</label>
            <input type={showPassword ? 'password': 'text'} id="password" name="password" placeholder="Introduce tu contraseña" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-3 transform -translate-y-1/2 mt-4">
            <img id="toggle-icon" src={
                showPassword
                  ? 'https://img.icons8.com/ios/50/ffffff/visible.png'
                  : 'https://img.icons8.com/ios/50/ffffff/invisible.png'
              } alt="Mostrar/Ocultar contraseña" className="w-6 h-6"/>
            </button>
          </div>

          <div className="mb-4">
            <label htmlFor="program" className="block text-lg font-bold text-gray-300">Programa</label>
            <select id="program" name="programlist" className="bg-gray-800 text-white p-2 rounded pr-40">
              <option value="">Seleccione un programa</option>
              {programas.map((item, index) => (
               <option key={index} value={item}>{item}</option>
            ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-bold text-gray-300">Descripción</label>
            <textarea id="description" name="description" placeholder="Introduce tu descripción" rows="5" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit" className="w-full py-3 px-4 bg-[#1BAA7D] hover:bg-[#1bc632] text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-[#1BAA7D] mb-4">
            Registrarse
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            ¿Ya tienes cuenta? <a href="../login/login.html" className="text-[#1bc632] hover:underline">Inicia Sesión</a>
          </p>
        </div>
      </div>
      
      
    </>
  );
}

