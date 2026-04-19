export default function HeaderRequerimentos() {
  return (
    <header className="flex justify-between items-center mb-10">
      <h1 className="text-[2rem] font-bold text-[#202020]">Meus Requerimentos</h1>
      <img src="/avatar.svg" alt="Avatar do usuário" className="w-10 h-10 rounded-full object-cover" />
    </header>
  );
}