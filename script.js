const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultList");
const langSelect = document.getElementById("langSelect");
const title = document.getElementById("title");

function updateLanguage() {
  const lang = langSelect.value;

  if (lang === "en") {
    title.textContent = "Dictionary";
    searchInput.placeholder = "Search word...";
  } else if (lang === "uz") {
    title.textContent = "Lug‘at";
    searchInput.placeholder = "So‘z qidiring...";
  } else {
    title.textContent = "Словарь";
    searchInput.placeholder = "Поиск слова...";
  }

  showResults(searchInput.value);
}

function showResults(query) {
  resultList.innerHTML = "";
  const lang = langSelect.value;

  dictionary
    .filter(item => item.en.startsWith(query.toLowerCase()))
    .forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.en} → ${item[lang]}`;
      resultList.appendChild(li);
    });
}

searchInput.addEventListener("input", e => {
  showResults(e.target.value);
});

langSelect.addEventListener("change", updateLanguage);
