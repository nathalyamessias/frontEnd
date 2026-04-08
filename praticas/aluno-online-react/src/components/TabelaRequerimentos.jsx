export default function TabelaRequerimentos() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl">
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#f0f0f0] border-b border-[#d7d7d7]">
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 pl-4 w-1/2">Tipo de Requerimento</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 w-1/4">Data de Solicitação</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 w-1/4">Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Revisão de Menção</td>
                <td className="p-3 text-sm text-gray-800">15/12/2025</td>
                <td className="p-3 text-sm text-gray-800">Indeferido</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Dispensa de Disciplina</td>
                <td className="p-3 text-sm text-gray-800">12/06/2025</td>
                <td className="p-3 text-sm text-gray-800">Indeferido</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Trancamento de Matrícula</td>
                <td className="p-3 text-sm text-gray-800">05/01/2024</td>
                <td className="p-3 text-sm text-gray-800">Deferido</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Mudança de Turno</td>
                <td className="p-3 text-sm text-gray-800">10/10/2023</td>
                <td className="p-3 text-sm text-gray-800">Deferido</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">Renovação de Matrícula</td>
                <td className="p-3 text-sm text-gray-800">20/02/2023</td>
                <td className="p-3 text-sm text-gray-800">Deferido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}