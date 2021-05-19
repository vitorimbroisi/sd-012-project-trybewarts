const loginButton = document.querySelector('.login-validation');

loginButton.addEventListener('click', () => {
  const login = document.querySelector('#login');
  const password = document.querySelector('#password');
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const submitButton = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');

checkAgreement.addEventListener('change', (event) => {
  if (event.target.checked) {
    submitButton.disabled = false;
  }
});

const textAreaInput = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

textAreaInput.addEventListener('keyup', () => {
  counter.innerHTML = 500 - textAreaInput.value.length;
});

const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');

submitButton.addEventListener('click', () => {

  const nameParagraph = document.createElement('p');
  nameParagraph.innerHTML = `Nome: ${firstName.value} ${lastName.value}`;
  firstName.parentNode.removeChild(firstName.parentNode.lastElementChild);
  firstName.parentNode.replaceChild(nameParagraph, firstName);

  const emailParagraph = document.createElement('p');
  emailParagraph.innerHTML = `Email: ${email.value}`;
  email.parentNode.replaceChild(emailParagraph, email);

  const houseParagraph = document.createElement('p');
  houseParagraph.innerHTML = `Casa: ${house.value}`;
  house.parentNode.replaceChild(houseParagraph, house);
});
//   const families = document.querySelectorAll('.input-family')
//   for (let family of families) {
//       if (families[family].checked) {
//         const familyParagraph = document.createElement('p');
//       }

//   }

// const evaluationNote = document.querySelector('#label-rate');
// for (let note = 1; note <= 10; note += 1) {
//     let input = document.createElement('input');
//     let label = document.createElement('label');
//     input.type = 'radio';
//     input.name = 'rate';
//     input.value = note;
//     label.innerText = note;
//     evaluationNote.appendChild(label);
//     evaluationNote.appendChild(input);
// }
