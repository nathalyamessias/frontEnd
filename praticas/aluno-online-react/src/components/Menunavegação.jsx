export default function MenuNavegacao() {
  return (
    <nav>
      <ul className="list-disc pl-5 flex flex-col gap-4 marker:text-gray-800">
        <li>
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors block">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors block">
            Notas
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors block">
            Faltas
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors block">
            Boletos
          </a>
        </li>
        <li>
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-gray-600 transition-colors block">
            Requerimentos
          </a>
        </li>
        <li className="mt-6 pt-4 border-t border-gray-300 marker:text-transparent">
          <a href="#" className="text-sm font-bold text-gray-800 hover:text-[#cb2525] transition-colors block -ml-5">
            Sair
          </a>
        </li>
      </ul>
    </nav>
  );
}