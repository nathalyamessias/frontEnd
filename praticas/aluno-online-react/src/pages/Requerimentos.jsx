import Sidebar from '../components/Sidebar';
import HeaderRequerimentos from '../components/Headerrequerimentos';
import TabelaRequerimentos from '../components/Tabelarequerimentos';
import TextoDescritivoRequerimentos from '../components/TextoDescritivoRequerimentos';

export default function Requerimentos() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      <Sidebar />
      
      <div className="flex flex-col flex-1 p-6 md:p-10">
        <HeaderRequerimentos />

        <main>
            <TextoDescritivoRequerimentos />  
          <TabelaRequerimentos />
        </main>
        
      </div>
    </div>
  );
}