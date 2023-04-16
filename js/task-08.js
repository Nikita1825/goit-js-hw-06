const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]')
};

refs.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const elements = {
    email: refs.email.value,
    password: refs.password.value,
    };
    if (refs.email.value === "" || refs.password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
  console.log(elements);

  refs.form.reset();
})