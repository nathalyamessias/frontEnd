import { Routes, Route, Navigate } from 'react-router';
import { useAuth } from './Contexts/AuthContext';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard';
import Faltas from './Pages/Faltas';
import Notas from './Pages/Notas';
import Boletos from './Pages/Boletos';
import Requerimentos from './Pages/Requerimentos';
import Login from './Pages/Login';
import RequerimentoForm from './Forms/RequerimentoForm';

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>
      <Route 
        path="/login" 
        element={!autenticado ? <Login /> : <Navigate to="/" />} 
      />

      <Route 
        path="/" 
        element={autenticado ? <Layout /> : <Navigate to="/login" />}
      >
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos">
          <Route index element={<Requerimentos />} />
          <Route path="novo" element={<RequerimentoForm />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={autenticado ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;