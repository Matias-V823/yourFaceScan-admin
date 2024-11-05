import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Layout from './layout/Layout';
import Usuarios from './views/General/Usuarios';
import Antecedentes from './views/General/Antecedentes';
import HistorialDeConsultas from './views/General/HistorialDeConsultas';
import Estadisticas from './views/Herramientas/Estadisticas';
import Automatizacion from './views/Herramientas/Automatizacion';
import ControlDeAcceso from './views/Herramientas/ControlDeAcceso';
import Alertas from './views/Herramientas/Alertas';
import Ayuda from './views/Soporte/Ayuda';
import Seguridad from './views/Soporte/Seguridad';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/"
          element={
            <Suspense fallback="Cargando...">
              <Login />
            </Suspense>
          }
        />
        
        {/* Layout */}
        <Route
          path="/admin"
          element={
            <Suspense fallback="Cargando...">
              <Layout />
            </Suspense>
          }
        >
          {/* Childrens Layout */}
          <Route
            path="usuarios"
            element={
              <Suspense fallback="Cargando...">
                <Usuarios />
              </Suspense>
            }
          />
          <Route
            path="antecedentes"
            element={
              <Suspense fallback="Cargando...">
                <Antecedentes />
              </Suspense>
            }
          />
          <Route
            path="historial"
            element={
              <Suspense fallback="Cargando...">
                <HistorialDeConsultas />
              </Suspense>
            }
          />
          <Route
            path="estadisticas"
            element={
              <Suspense fallback="Cargando...">
                <Estadisticas />
              </Suspense>
            }
          />
          <Route
            path="automatizacion"
            element={
              <Suspense fallback="Cargando...">
                <Automatizacion />
              </Suspense>
            }
          />
          <Route
            path="control&de&acceso"
            element={
              <Suspense fallback="Cargando...">
                <ControlDeAcceso />
              </Suspense>
            }
          />
          <Route
            path="alertas&notificaciones"
            element={
              <Suspense fallback="Cargando...">
                <Alertas />
              </Suspense>
            }
          />
          <Route
            path="seguridad"
            element={
              <Suspense fallback="Cargando...">
                <Seguridad />
              </Suspense>
            }
          />
          <Route
            path="ayuda"
            element={
              <Suspense fallback="Cargando...">
                <Ayuda />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
