export async function criarRequerimento(dados) {
  const response = await fetch("http://localhost:3000/requerimentos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    throw new Error("Erro ao salvar o requerimento no servidor.");
  }

  return response.json();
}

export async function listarRequerimentos() {
  const response = await fetch("http://localhost:3000/requerimentos");

  if (!response.ok) {
    throw new Error("Erro ao buscar os requerimentos do servidor.");
  }

  return response.json();
}
