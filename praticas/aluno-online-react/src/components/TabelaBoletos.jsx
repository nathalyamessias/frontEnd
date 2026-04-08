export default function TabelaBoletos() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl">
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#f0f0f0] border-b border-[#d7d7d7]">
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 pl-4 w-1/3">Vencimento</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 w-1/3">Valor R$</th>
                <th className="p-3 text-[0.95rem] font-bold text-gray-800 w-1/3">Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/01/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">Pago</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/02/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">Em atraso</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/03/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">A Pagar</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/04/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">A Pagar</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/05/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">A Pagar</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/06/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">A Pagar</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/07/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">A Pagar</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/08/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">A Pagar</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/09/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">A Pagar</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 text-sm text-gray-800 pl-4">19/10/2026</td>
                <td className="p-3 text-sm text-gray-800">500,00</td>
                <td className="p-3 text-sm text-gray-800">A Pagar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}