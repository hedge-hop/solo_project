const form = document.querySelector('.registerForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const firstname = event.target.firstname.value;
  const lastname = event.target.lastname.value;
  const cellphone = event.target.cellphone.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname, lastname, cellphone, email, password,
    }),
  });
  if (response.status === 200) {
    const result = await response.json();
    if (result.name) {
      alert(`Пользователь ${result.name} успешно зарегистрирован`);
    } else {
      alert('Ошибка при регистрации');
    }
    window.location.href = '/login';
  }
});
