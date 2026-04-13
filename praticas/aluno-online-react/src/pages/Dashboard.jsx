// src/pages/Dashboard.jsx
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TextoDescritivo from '../components/TextoDescritivo';
import CardLista from '../components/CardLista';

export default function Dashboard() {
  
  
  const dadosAvisos = [
    "Inscrição para o projeto de extensão",
    "Eleição para representante de turma"
  ];

  const dadosCalendario = [
    "23/02 - Início do período letivo 2026-1",
    "25/04 - Prazo final para aplicação da P1",
    "23/06 - Prazo final para aplicação da P2",
    "04/07 - Fim do período letivo 2026-1"
  ];

  const dadosDisciplinas = [
    "BI e Data Warehousing",
    "Construção de Frontend",
    "Manutenção de Software e Devops"
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      <Sidebar paginaAtual="Dashboard" />
      
      <div className="flex flex-col flex-1 p-6 md:p-10">
        <Header titulo="Olá, Aluno!" />
        
        <main>
          <TextoDescritivo texto="Bem-vindo ao portal do aluno" />
          
          <section className="flex flex-col gap-4 mt-6">
            <CardLista titulo="Mural de Avisos" itens={dadosAvisos} />
            <CardLista titulo="Calendário Acadêmico" itens={dadosCalendario} />
            <CardLista titulo="Minhas Disciplinas" itens={dadosDisciplinas} />
          </section>
        </main>
        
      </div>
    </div>
  );
}