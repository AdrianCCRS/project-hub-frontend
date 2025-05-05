// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import EditProfile from './pages/EditProfile';

import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/useAuth';
import { ProjectsContextProvider } from './context/useProjects';


export default function App() {
  return (
    <>
    <UserProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<  Landing />} />
          <Route path="/projects" element={
            <ProjectsContextProvider>
              <Index />
            </ProjectsContextProvider>}
             />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/profile/edit' element={<EditProfile />} />

          {/* Rutas protegidas
          <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          
          {/* Ruta 404 opcional */}
          {/* <Route path="*" element={<div>404 - Página no encontrada</div>} />  */}
        </Routes>
        <ToastContainer />
      </UserProvider>
    </>
  );
}
