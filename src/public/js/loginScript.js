const form = document.querySelector('.loginForm');
// const loginButton = document.getElementById('loginBtn');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (response.status === 401) {
    alert('Неверная пара логин/пароль');
  }
  if (response.status === 200) {
    const result = await response.json();
    if (!result.name) {
      alert('Добро пожаловать!');
    } else {
      alert(`Здравствуйте, ${result.name}!`);
    }
    window.location.href = '/';
  }
  if (response.status === 400) { alert('Пользователь не зарегистрирован'); }
});
