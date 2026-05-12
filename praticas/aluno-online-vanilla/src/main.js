import "./style.css";
console.log("Script carregou com sucesso!");

// Garantimos que o código só rode depois que a página HTML inteira carregar
document.addEventListener('DOMContentLoaded', function() {
  const formLogin = document.getElementById('form-login');

  if (formLogin) {
    formLogin.addEventListener('submit', function (evento) {
      // 🚨 Essa é a linha mágica que impede a página de recarregar!
      evento.preventDefault();

      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value.trim();
      const erroEmail = document.getElementById('erro-email');
      const erroSenha = document.getElementById('erro-senha');

      let formularioValido = true;

      // Limpamos os erros
      erroEmail.textContent = "";
      erroSenha.textContent = "";

      if (email === "") {
        erroEmail.textContent = "O campo de email é obrigatório.";
        formularioValido = false;
      }

      if (senha === "") {
        erroSenha.textContent = "O campo de senha é obrigatório.";
        formularioValido = false;
      }

      if (formularioValido === true) {
        // Redireciona para o Dashboard se estiver tudo certo
        window.location.href = "./index.html";
      }
    });
  }
});