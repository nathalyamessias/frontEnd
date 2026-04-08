export default function TabelaNotas() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl">
      
      {/* ===================== SEMESTRE 2026.1 ===================== */}
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
        <div className="bg-[#f0f0f0] px-4 py-3 text-[1.1rem] font-bold text-gray-800">
          2026.1
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#f0f0f0] border-b border-[#d7d7d7]">
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 pl-4 w-[40%]">Disciplina</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 text-center">A1</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 text-center">A2</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 text-center">A3</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 text-center">Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">BI e Data Warehousing</td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center">SR</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Construção de Frontend</td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center">SR</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Manutenção de Software e Devops</td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center">SR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===================== SEMESTRE 2025.2 ===================== */}
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
        <div className="bg-[#f0f0f0] px-4 py-3 text-[1.1rem] font-bold text-gray-800">
          2025.2
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#f0f0f0] border-b border-[#d7d7d7]">
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 pl-4 w-[40%]">Disciplina</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 text-center">A1</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 text-center">A2</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 text-center">A3</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 text-center">Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Construção de Backend</td>
                <td className="p-3 text-sm text-gray-800 text-center">5.4</td>
                <td className="p-3 text-sm text-gray-800 text-center">6.2</td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center">MM</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Estrutura de Dados</td>
                <td className="p-3 text-sm text-gray-800 text-center">6.3</td>
                <td className="p-3 text-sm text-gray-800 text-center">6.1</td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center">MM</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Gerenciamento de Projetos</td>
                <td className="p-3 text-sm text-gray-800 text-center">7.4</td>
                <td className="p-3 text-sm text-gray-800 text-center">7.1</td>
                <td className="p-3 text-sm text-gray-800 text-center"></td>
                <td className="p-3 text-sm text-gray-800 text-center">MS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}