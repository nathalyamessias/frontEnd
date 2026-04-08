import Sidebar from '../components/Sidebar';
import HeaderNotas from '../components/Headernotas';
import TabelaNotas from '../components/Tabelanotas';
import TextoDescritivoNotas from '../components/TextoDescritivoNotas';

export default function Notas() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      <Sidebar />
      
      <div className="flex flex-col flex-1 p-6 md:p-10">
        <HeaderNotas />

        <main>
          <TextoDescritivoNotas />
          
          <TabelaNotas />
        </main>
        
      </div>
    </div>
  );
}