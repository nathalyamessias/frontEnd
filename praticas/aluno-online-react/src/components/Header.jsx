export default function Header({ titulo, descricao }) {
  return (
    <header>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-[2rem] font-bold text-[#202020]">{titulo}</h1>
        <img src="/avatar.svg" alt="Avatar do usuário" className="w-10 h-10 rounded-full object-cover" />
      </div>
    
      {descricao && (
        <h2 className="text-[1.3rem] font-bold text-[#303030] mb-4">
          {descricao}
        </h2>
      )}
    </header>
  );
}