import Sidebar from '../components/Sidebar';
import Header from '../components/Headerdashboard';
import TextoDescritivoDashboard from '../components/TextoDescritivoDashboard';
import CardDashboard from '../components/CardDashboard';

export default function Dashboard() {
  return (
    
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      <Sidebar />
      
      <div className="flex flex-col flex-1 p-6 md:p-10">
        
        <Header />
        
        <main>
          
          <TextoDescritivoDashboard />
          
          <section className="flex flex-col gap-4">
            <CardDashboard />
          </section>
        </main>
        
      </div>
    </div>
  );
}