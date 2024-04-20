const articel7 = document.querySelector(".cocktails-center");
const input = document.querySelector("#input");
let loader = document.querySelector(".loader");

function creat(articel) {
  articel.forEach(
    ({ idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb }) => {
      let articel1 = document.createElement("article");
      articel1.classList.add("cocktail");
      articel1.innerHTML = `
    <div class="img-container">
      <img
        src="${strDrinkThumb}"
        alt="A1"
      />
    </div>
    <div class="cocktail-footer">
      <h3>${strDrink}</h3>
      <h4>${strGlass}</h4>
      <p>${strAlcoholic}</p>
      <a class="btn btn-primary btn-details" href="./about.html?id=${idDrink}">details</a>
    </div>
    `;
      articel7.appendChild(articel1);
    }
  );
}
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("jidden");
    creat(data.drinks);
  })
  .catch((eror) => {});

// input.addEventListener("input", (e) => {
//   const url = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e.target.value}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.drinks);
//       creat(data.drinks);
//     })
//     .catch((eror) => {});
//   console.log(url);
// });
