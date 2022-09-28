const registrationForm = document.querySelector('.registration-form');
const messageReg = document.querySelector('#messageReg');

registrationForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    name, mail, password, passwordRepeat,
  } = event.target;
  const response = await fetch('auth/registration', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.value,
      mail: mail.value,
      password: password.value,
      passwordRepeat: passwordRepeat.value,
    }),
  });

  const data = await response.json();
  if (data.message === 'Неккоректный e-mail') { messageReg.innerText = data.message; }
  if (data.message === 'Пароль короткий, необходимо минимум 8 символов');
  messageReg.innerText = data.message;
  if (data.message === 'Пароли не совпадают') messageReg.innerText = data.message;
  if (data.message === 'Пользователь с таким e-mail уже существует') messageReg.innerText = data.message;
  if (data.message === 'ok') window.location.href = '/';
});
