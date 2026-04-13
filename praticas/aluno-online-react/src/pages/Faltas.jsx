import Sidebar from '../components/Sidebar';
import HeaderFaltas from '../components/Headerfaltas';
import TabelaFaltas from '../components/Tabelafaltas';
import TextoDescritivoFaltas from '../components/TextoDescritivoFaltas';

export default function Faltas() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      <Sidebar />
      
      <div className="flex flex-col flex-1 p-6 md:p-10">
        
        <HeaderFaltas />

        <main>
          
          <TextoDescritivoFaltas />
          <TabelaFaltas />
        </main>
        
      </div>
    </div>
  );
}