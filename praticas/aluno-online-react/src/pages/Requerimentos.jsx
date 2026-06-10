import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Header from '../Components/Header';
import TextoDescritivo from '../Components/TextoDescritivo';
import Tabela from '../Components/Tabela';
import { listarRequerimentos } from '../services/requerimentoService';

export default function Requerimentos() {
  
  const [lista, setLista] = useState([]);
  const colunasRequerimentos = ["Tipo de Requerimento", "Descrição", "Data de Solicitação", "Situação"];

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await listarRequerimentos();
        setLista(dados);
      } catch (error) {
        console.error(error);
      }
    };

    carregarDados();
  }, []);

  const dadosFormatados = lista.map((req) => ({
    tipo: req.tipo,
    descricao: req.descricao,
    data: req.dataRequerimento,
    situacao: req.situacao || "Em análise"
  }));

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
            
      <div className="flex flex-col flex-1 p-6 md:p-10">
        
        <Header titulo="Meus Requerimentos" />

        <main>
          <div className="flex justify-between items-center mb-6">
            <TextoDescritivo texto="Faça solicitações online para a secretaria" />  
            <Link 
              to="/requerimentos/novo" 
              className="bg-white hover:bg-black text-black hover:text-white border-3 border-black p-4 font-bold py-2 px-4 rounded transition"
            >
              ➕ Novo Requerimento
            </Link>
          </div>
          
          <Tabela colunas={colunasRequerimentos} dados={dadosFormatados} />
        </main>
        
      </div>
    </div>
  );
}