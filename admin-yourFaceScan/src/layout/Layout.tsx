import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="grid grid-cols-[1fr_4fr] min-h-screen">
      <div className="bg-gray-50 border-r border-gray-200 h-full p-3">
        <div className="flex items-center justify-start mb-6">
          {/* Logo y Título */}
          <h2 className="text-lg font-bold text-blue-600">YourFace</h2>
          <span className="text-lg font-light text-blue-400 ml-1">Scan</span>
        </div>
        {/* Sección General */}
        <div className="mb-4">
          <h4 className="text-gray-400 uppercase text-xs mb-3">General</h4>
          <NavLink 
            to="/admin"
            className=
              "flex items-center w-full p-2 mb-1 rounded-lg font-medium"
          >
            <i className="material-icons text-base">home</i>
            <span className="ml-2 text-sm">Dashboard</span>
          </NavLink>
          <NavLink 
            to="/admin/usuarios"
            className={({ isActive }) =>
              `flex items-center w-full text-sm p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-lg">person</i>
            <span className="ml-2 text-sm">Usuarios</span>
          </NavLink>
          <NavLink 
            to="/admin/antecedentes"
            className={({ isActive }) =>
              `flex items-center w-full p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-lg">description</i>
            <span className="ml-2 text-sm">Antecedentes</span>
          </NavLink>
          <NavLink 
            to="/admin/historial"
            className={({ isActive }) =>
              `flex items-center w-full p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-lg">history</i>
            <span className="ml-2 text-sm">Historial de consultas</span>
          </NavLink>
        </div>
        {/* Sección Herramientas */}
        <div className="mb-4">
          <h4 className="text-gray-400 uppercase text-xs mb-3">Herramientas</h4>
          <NavLink 
            to="/admin/estadisticas"
            className={({ isActive }) =>
              `flex items-center w-full p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-base">bar_chart</i>
            <span className="ml-2 text-sm">Estadísticas</span>
          </NavLink>
          <NavLink 
            to="/admin/automatizacion"
            className={({ isActive }) =>
              `flex items-center w-full p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-base">settings</i>
            <span className="ml-2 text-sm">Automatización</span>
          </NavLink>
          <NavLink 
            to="/admin/control&de&acceso"
            className={({ isActive }) =>
              `flex items-center w-full p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-base">lock</i>
            <span className="ml-2 text-sm">Control de Acceso</span>
          </NavLink>
          <NavLink 
            to="/admin/alertas&notificaciones"
            className={({ isActive }) =>
              `flex items-center w-full p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-base">notifications</i>
            <span className="ml-2 text-sm">Alertas y Notificaciones</span>
          </NavLink>
        </div>
        {/* Sección Soporte */}
        <div>
          <h4 className="text-gray-400 uppercase text-xs mb-3">Soporte</h4>
          <NavLink 
            to="/admin/seguridad"
            className={({ isActive }) =>
              `flex items-center w-full p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-base">security</i>
            <span className="ml-2 text-sm">Seguridad</span>
          </NavLink>
          <NavLink 
            to="/admin/ayuda"
            className={({ isActive }) =>
              `flex items-center w-full p-2 mb-1 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <i className="material-icons text-base">help_outline</i>
            <span className="ml-2 text-sm">Ayuda</span>
          </NavLink>
        </div>
      </div>
      <div className="bg-gray-50 grid grid-rows-[auto_1fr] h-full">
            <div className="h-[80px] border-b border-gray-200 flex items-center">
                <Header />
            </div>
            <div className="p-4 flex items-center justify-center">
                <Outlet/>
            </div>
        </div>
    </main>
  );
};
export default Layout;
