const authForm = document.querySelector('.auth-form');
const messageLog = document.querySelector('#messageLog');

authForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { email, password } = event.target;
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const data = await response.json();
  if (data.message === 'Данного пользователя не существует' || data.message === 'Неправильный пароль или e-mail') { messageLog.innerText = data.message; }
  if (data.message === 'ok') window.location.href = '/';
});
