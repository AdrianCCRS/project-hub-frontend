// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import EditProfile from './pages/EditProfile';
import CreateGroup from './pages/group/CreateGroup';

import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/useAuth';
import { ProjectsContextProvider } from './context/useProjects';
import { UserContextProvider } from './context/useUser';
import PrivateRoute from './components/PrivateRoute';


export default function App() {
  return (
    <>
    <AuthProvider>
        <Routes>
          {/* Rutas públicas */}
                <Route path="/" element={<Landing />} />
               
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                

                {/* Rutas protegidas */}
                <Route path="/projects" element={
                  <PrivateRoute>
                    <ProjectsContextProvider>
                      <Index />
                    </ProjectsContextProvider>
                  </PrivateRoute>}
                />
                <Route path='/profile/edit' element={
                  <PrivateRoute>
                    <UserContextProvider>
                      <EditProfile />
                    </UserContextProvider>
                  </PrivateRoute>}
                />
                <Route path='/group/create' element={
                  <PrivateRoute>
                    <UserContextProvider>
                      <CreateGroup />
                    </UserContextProvider>
                  </PrivateRoute>}
                />

                
                {/* Ruta 404 opcional */}
          {/* <Route path="*" element={<div>404 - Página no encontrada</div>} />  */}
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}
