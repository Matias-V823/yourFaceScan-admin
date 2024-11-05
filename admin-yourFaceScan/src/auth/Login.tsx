import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); 

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(user).includes('')) {
      console.log('Todos los campos son obligatorios');
      return; 
    }

    navigate('/admin', { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Login</h2>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Ingrese Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleForm}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-700">Ingrese Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleForm}
              value={user.password}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="w-full p-3 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
