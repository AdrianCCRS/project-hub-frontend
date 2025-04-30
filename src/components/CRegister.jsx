import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function CRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    program: "",
    description: "",
  });

   // Función handleChange robusta
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value === null || value === undefined ? "" : value
    }));
  };


  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.program || !formData.description) {
      return "Todos los campos son obligatorios";
    }
    if (formData.password.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "El correo debe ser válido";
    }
    if (formData.description.length < 10) {
      return "La descripción debe tener mínimo 10 caracteres";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const endpoint = "/auth/register";
    try {
      const response = await axios.post(`http://localhost:8080${endpoint}`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(response.data.message || "Registro exitoso");

      // Limpiar formulario
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        program: "",
        description: "",
      });

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Error en la petición:", err.response?.data || err);
      setError(err.response?.data?.error || "Error en el registro");
    }
  };

  const programas = [
    "Ingeniería de Sistemas", "Ingeniería de Petroleos", "Ingeniería Industrial",
    "Ingeniería Química", "Ingeniería Electrónica", "Ingeniería Mecánica",
    "Ingeniería Civil", "Ingeniería Ambiental", "Ingeniería Biomédica",
    "Ingeniería Eléctrica"
  ];

  return (
    <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg mt-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Regístrate</h2>

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {message && <p className="text-green-500 mb-4 text-center">{message}</p>}

      <form id="registerForm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-lg font-bold text-gray-300">Nombres</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Introduce tu nombre" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="lastname" className="block text-lg font-bold text-gray-300">Apellidos</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Introduce tu apellido" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-bold text-gray-300">Correo Electrónico</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Introduce tu correo" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-lg font-bold text-gray-300">Contraseña</label>
          <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Introduce tu contraseña" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-3 transform -translate-y-1/2 mt-4">
            <img id="toggle-icon" src={showPassword
              ? 'https://img.icons8.com/ios/50/ffffff/visible.png'
              : 'https://img.icons8.com/ios/50/ffffff/invisible.png'} alt="Mostrar/Ocultar contraseña" className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="program" className="block text-lg font-bold text-gray-300">Programa</label>
          <select id="program" name="program"  value={formData.program || ""}onChange={handleChange} className="bg-gray-800 text-white p-2 rounded w-full">
            <option value="">Seleccione un programa</option>
            {programas.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-bold text-gray-300">Descripción</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Introduce tu descripción" rows="5" className="w-full p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" className="w-full py-3 px-4 bg-[#1BAA7D] hover:bg-[#1bc632] text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-[#1BAA7D] mb-4">
          Registrarse
        </button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-400">
          ¿Ya tienes cuenta? <span onClick={() => navigate("/login")} className="text-[#1bc632] hover:underline cursor-pointer">Inicia Sesión</span>
        </p>
      </div>
    </div>
  );
}
