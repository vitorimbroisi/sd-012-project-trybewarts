const loginButton = document.querySelector('#login-button');
const loginInput = document.querySelector('#login-input');
const passInput = document.querySelector('#pass-input');
const escolheCasa = document.querySelector('#house');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (loginInput.value !== 'tryber@teste.com' || passInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
    loginInput.value = '';
    passInput.value = '';
  }
});

function escolherCasa() {
  const casas = [
    { casa: 'Gitnória', id: 'gitnoria-house' },
    { casa: 'Reactpuff', id: 'reactpuff-house' },
    { casa: 'Corvinode', id: 'corvinode-house' },
    { casa: 'Pytherina', id: 'pytherina-house' },
  ];

  for (let index = 0; index < casas.length; index += 1) {
    const novaCasa = document.createElement('option');
    novaCasa.innerHTML = casas[index].casa;
    novaCasa.id = casas[index].id;
    escolheCasa.appendChild(novaCasa);
  }
}

escolherCasa();
