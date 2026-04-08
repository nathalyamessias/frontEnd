export default function CardDashboard() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Minhas Disciplinas */}
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
        <div className="bg-[#f0f0f0] px-4 py-3 text-[1.1rem] font-bold text-gray-800">
          Minhas Disciplinas
        </div>
        <ul className="p-4 flex flex-col gap-2 text-[0.95rem] text-gray-800">
          <li>BI e Data Warehousing</li>
          <li>Construção de Frontend</li>
          <li>Manutenção de Software e Devops</li>
        </ul>
      </div>

      {/* Mural de Avisos */}
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
        <div className="bg-[#f0f0f0] px-4 py-3 text-[1.1rem] font-bold text-gray-800">
          Mural de Avisos
        </div>
        <ul className="p-4 flex flex-col gap-2 text-[0.95rem] text-gray-800">
          <li>Inscrição para o projeto de extensão</li>
          <li>Eleição para representante de turma</li>
        </ul>
      </div>

      {/* Calendário Acadêmico */}
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
        <div className="bg-[#f0f0f0] px-4 py-3 text-[1.1rem] font-bold text-gray-800">
          Calendário Acadêmico
        </div>
        <ul className="p-4 flex flex-col gap-2 text-[0.95rem] text-gray-800">
          <li>23/02 - Início do período letivo 2026-1</li>
          <li>25/04 - Prazo final para aplicação da P1</li>
          <li>23/06 - Prazo final para aplicação da P2</li>
          <li>04/07 - Fim do período letivo 2026-1</li>
        </ul>
      </div>

    </div>
  );
}