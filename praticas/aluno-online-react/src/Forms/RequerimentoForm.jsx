import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';

export default function RequerimentoForm() {
  const dataHoje = new Date().toLocaleDateString('en-CA'); 

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      dataRequerimento: dataHoje
    }
  });
  
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Novo Requerimento Registrado:", data);
    reset(); 
    alert("Requerimento salvo com sucesso!");
    navigate("/requerimentos"); 
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      <div className="flex flex-col flex-1 p-6 md:p-10">
        <Header titulo="Novo Requerimento" />

        <main className="mt-6 max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            
              <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Tipo de Requerimento</label>
              <select 
                {...register("tipo", { required: "O Tipo de Requerimento é obrigatório." })}
                className="border border-gray-300 p-3 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione um tipo...</option>
                <option value="Revisão de Menção">Revisão de Menção</option>
                <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
                <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
                <option value="Mudança de Turno">Mudança de Turno</option>
              </select>
              {errors.tipo && <span className="text-red-500 text-sm mt-1">{errors.tipo.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Descrição</label>
              <textarea 
                {...register("descricao", { 
                  required: "A descrição é obrigatória.",
                  minLength: { value: 10, message: "A descrição deve ter no mínimo 10 caracteres." }
                })}
                rows="5"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.descricao && <span className="text-red-500 text-sm mt-1">{errors.descricao.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-gray-700">Data do Requerimento</label>
              <input 
                type="date"
                readOnly
                {...register("dataRequerimento", { 
                  required: "A data é obrigatória.",
                  validate: (value) => value === dataHoje || "Tentativa de fraude! A data do requerimento não pode ser alterada."
                })}
                className="border border-gray-300 p-3 rounded-md bg-gray-100 text-gray-600 focus:outline-none cursor-not-allowed w-64"
              />
              {errors.dataRequerimento && <span className="text-red-500 text-sm mt-1">{errors.dataRequerimento.message}</span>}
            </div>

            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => navigate("/requerimentos")}
                className="bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-300 transition"
              >
                Cancelar
              </button>

              <button 
                type="submit" 
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Salvar
              </button>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
}