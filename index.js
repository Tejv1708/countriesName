function searchShow(query) {
  const url = `https://restcountries.com/v2/name/${query}`;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw "HTTP ERROR";
      }
    })
    .then((jsonData) => {
      const results = jsonData.map((element) => element.name);
      renderResults(results);

      document.getElementById("errorMessage").innerHTML = "";
    })
    .catch((error) => {
      document.getElementById("errorMessage").innerHTML = error;
      renderResults([]);
    });
}
function renderResults(results) {
  const list = document.getElementById("resultList");
  list.innerHTML = "";
  results.forEach((result) => {
    const element = document.createElement("div");
    element.innerText = result;
    list.appendChild(element);
    element.style.background = "grey";
    list.classList.add("lists");
    element.classList.add("element");
  });
}

// By this I get the result . Which I search for .
let searchTimeoutToken = 0;
window.onload = () => {
  const searchFieldElement = document.getElementById("searchField");
  searchFieldElement.onkeydown = (event) => {
    clearTimeout(searchTimeoutToken);
    if (searchFieldElement.value.trim().length === 0) {
      return;
    }
    searchTimeoutToken = setTimeout(() => {
      searchShow(searchFieldElement.value);
    }, 250);
  };
};
