const form = document.querySelector("#item-form");
const textInput = document.querySelector("#item-text");
const typeSelect = document.querySelector("#item-type");
const itemList = document.querySelector("#item-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = textInput.value.trim();
  if (!text) return;

  const item = document.createElement("li");
  item.classList.add(typeSelect.value);
  item.textContent = text;
  itemList.appendChild(item);
  form.reset();
  textInput.focus();
});
