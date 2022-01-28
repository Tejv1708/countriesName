const charactersList = document.getElementById("charactersLits");

const loadCharacters = async () => {
  try {
    const res = await fetch("https://restcountries.com/v2/name/${query}");
    let hPCharacters = await res.json();
    displayCharacters(hPCharacters);
    console.log(hPCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (query) => {
  const htmlString = query.map((query) => {
    return `
        <li class ="list">
        <h2>${query.name} </h2>
        <p>House: ${query.capital} </p> 
        </li>
        `;
  });
};
