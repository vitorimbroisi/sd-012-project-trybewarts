const button = document.querySelector('#botao-login');
const familys = ['Frontend', 'Backend', 'FullStack'];
const houses = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];

function botaoLoginPassword() {
  const loginTrybewarts = document.querySelector('#login');
  const senhaTrybewarts = document.querySelector('#password');
  if (loginTrybewarts.value !== 'tryber@teste.com' || senhaTrybewarts.value !== '123456') {
    alert('Login ou senha inválidos.');
  }
  if (loginTrybewarts.value === 'tryber@teste.com' && senhaTrybewarts.value === '123456') {
    alert('Olá, Tryber!');
  }
}

function preventD() {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    botaoLoginPassword();
  });
}

preventD();

function createHouses() {
  const getTagHouse = document.getElementById('house');
  for (let index = 0; index < houses.length; index += 1) {
    const createOption = document.createElement('option');
    createOption.value = houses[index];
    createOption.innerText = houses[index];
    const lowCase = houses[index].toLowerCase();
    createOption.id = lowCase + '-house';
    getTagHouse.appendChild(createOption);
  }
}

createHouses()

function createFamily() {
  const getTagFamily = document.getElementById('family-input');
  for (let index = 0; index < familys.length; index += 1) {
    const createLabelFamily = document.createElement('label');
    const createInput = document.createElement('input');
    createLabelFamily.innerText = familys[index];
    createInput.className = 'family';
    createInput.type = 'radio';
    createInput.value = familys[index];
    getTagFamily.appendChild(createLabelFamily);
    getTagFamily.appendChild(createInput);
  }
}

createFamily();