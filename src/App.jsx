// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';


export default function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/projects" element={<Index />} />
      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Ruta 404 opcional */}
      {/* <Route path="*" element={<div>404 - Página no encontrada</div>} />  */}
    </Routes>
  );
}
