function login() {
  const email = document.getElementById('user').value;
  const senha = document.getElementById('senha').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function checked() {
  const agreed = document.getElementById('agreement');
  const send = document.getElementById('submit-btn');
  if (agreed.checked) {
    send.removeAttribute('disabled');
  } else {
    send.setAttribute('disabled', 'disabled');
  }
}

window.onload = function main() {
  const logar = document.querySelector('.acess');
  logar.addEventListener('click', login);
  const agreed = document.getElementById('agreement');
  agreed.addEventListener('click', checked);
};
