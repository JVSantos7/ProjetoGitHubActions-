// Esperar o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function () {
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-console
  console.log("Aplicação inicializada");

  const formularioContato = document.getElementById("formulario-contato");
  if (formularioContato) {
    formularioContato.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;

      if (!nome || !email || !mensagem) {
        window.alert("Por favor, preencha todos os campos!");
        return;
      }

      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-console
      console.log("Formulário enviado:", { nome, email, mensagem });
      window.alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

      formularioContato.reset();
    });
  }

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
});
