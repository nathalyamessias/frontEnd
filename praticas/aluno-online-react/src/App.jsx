import { Routes, Route } from 'react-router';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard';
import Faltas from './Pages/Faltas';
import Notas from './Pages/Notas';
import Boletos from './Pages/Boletos';
import Requerimentos from './Pages/Requerimentos';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
      </Route>
    </Routes>
  );
}
