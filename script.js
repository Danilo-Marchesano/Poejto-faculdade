// Seleciona o formulário e a área de mensagem
const form = document.getElementById("formContato");
const mensagemStatus = document.getElementById("mensagemStatus");

// Função para validar e-mail com formato basico
function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// evento de envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // captura os valores digitados e remove espaços extras
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // para verifica se todos os campos foram preenchidos
  if (nome === "" || email === "" || mensagem === "") {
    mensagemStatus.textContent = "Por favor, preencha todos os campos.";
    mensagemStatus.style.color = "red";
    return;
  }

  // Valida o formato do e-mail
  if (!emailValido(email)) {
    mensagemStatus.textContent = "Por favor, digite um e-mail válido.";
    mensagemStatus.style.color = "red";
    return;
  }

  // Se estiver tudo correto, mostra mensagem de sucesso
  mensagemStatus.textContent = "Mensagem enviada com sucesso!";
  mensagemStatus.style.color = "green";

  // Limpar o formulário
  form.reset();
});