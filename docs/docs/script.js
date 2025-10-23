document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("magicBtn");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    output.textContent = "✨ Кнопка сработала! Теперь ты можешь добавлять сюда любую логику.";
  });
});
