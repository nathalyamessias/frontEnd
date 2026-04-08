import MenuNavegacao from './Menunavegacao';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-6 w-[250px] bg-[#E9E9E9] border-r border-gray-300 p-5">
      
      <header className="flex items-center gap-2 border-b border-gray-300 pb-4">
        <img src="/learn.svg" alt="Logo Aluno Online" className="w-7 h-7 rounded" />
        <span className="text-base font-bold text-gray-800">Aluno Online</span>
      </header>
      
      <MenuNavegacao />
      
    </aside>
  );
}
