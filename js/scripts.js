const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector('#telefone');
const passwordInput = document.querySelector ("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Verificar se o nome está vazio
  if(!nameInput.value) {
    alert("Por favor, preecha o seu nome");
    return;
  }

  //  verificar se o email está preenchido e se é válido

  if(!emailInput.value || !isEmailValid(emailInput.value)) {
    alert("Por favor, preecha o seu email");
    return;
  }

  //  verificar se o telefone está preenchido
  if(!isValidateTelefone(telefoneInput.value)) {
    alert("Preencha o seu telefone");
    return;
  }

  //  verificar se a está preenchida
  if(!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ser no mínimo 8 dígitos.");
    return;
  }

  //  verificar se a situação foi selecioada
  if(!jobSelect.value) {
    alert("Por favor, selecione a sua situação");
    return;
  }

  //  verficar se a mensagem está preenchida
  if(!messageTextarea.value) {
    alert("Por favor, escreva uma mensagem");
    return;
  }

  //Se todos os campos estiverem corretamente preenchidos, envie o form
  form.submit();
});

//  função que valida e-mail 
function isEmailValid(email) {
  //cria uma regex para validar email
  const emailRegex = new RegExp(
    /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
  );

  if(emailRegex.test(email)) {
    return true;
  }

  return false;
};

//Função que valida a senha
function validatePassword(password, minDigits) {
  if(password.length >= minDigits) {
    // senha válida
    return true;
  }

    //senha inválida
    return false;
}

//função que valida o celular
function isValidateTelefone(telefone) {
  //criar uma regex para validar telefone
  const telefoneRegex = new RegExp(
    /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
  );

  //o regex não queria fucionar então Caio acrescentou 
  // uma  \ inicial que deu certo.

  console.log('asaddsa', telefone,telefoneRegex.test(telefone));
  if(telefoneRegex.test(telefone)) {
    return true;
  }

  return false;
};

