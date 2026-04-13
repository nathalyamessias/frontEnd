import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Notas from './pages/Notas';
import Requerimentos from './pages/Requerimentos';

export default function App() {
  return (
    <>
      {/* Tiramos o comentário apenas do Dashboard para testar a tela dele */}
      <Dashboard />
       {/*<Notas />*/}
      {/* <Faltas /> */}
      {/* <Boletos /> */}
      {/* <Requerimentos /> */}
    </>
  );
}