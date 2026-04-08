import Sidebar from '../components/Sidebar';
import HeaderBoletos from '../components/Headerboletos';
import TabelaBoletos from '../components/Tabelaboletos'; 
import TextoDescritivoBoletos from '../components/TextoDescritivoBoletos';

export default function Boletos() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      <Sidebar />
      
      <div className="flex flex-col flex-1 p-6 md:p-10">
        <HeaderBoletos />

        <main>

          <TextoDescritivoBoletos />
          <TabelaBoletos />
        </main>
        
      </div>
    </div>
  );
}