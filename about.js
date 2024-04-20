const ui = document.querySelector(".section");
const loader = document.querySelector(".loader");
function creat(iu) {
  iu.forEach(
    ({
      idDrink,
      strDrink,
      strGlass,
      strCategory,
      strAlcoholic,
      strDrinkThumb,
      strInstructions,
      strIngredient1,
      strIngredient3,
      strIngredient4,
    }) => {
      let iu1 = document.createElement("article");
      iu1.classList.add("cocktail8");
      console.log(strDrink);
      iu1.innerHTML = `
      <h2 class="section-title">${strDrink}</h2>
      <div class="drink">
        <img
          src="${strDrinkThumb}"
          alt="${strDrink}"
        />
        <div class="drink-info">
          <p><span class="drink-data">name :</span>${strDrink}</p>
          <p><span class="drink-data">category :</span>${strCategory}</p>
          <p><span class="drink-data">info :</span> ${strAlcoholic}</p>
          <p><span class="drink-data">glass :</span>${strGlass}</p>
          <p>
            <span class="drink-data">instructons :</span> ${strInstructions}
          </p>
          <p>
            <span class="drink-data">ingredients :</span><span> ${strIngredient1}</span
            ><span> Grand Marnier</span><span> ${strIngredient3}/span
            ><span> ${strIngredient4}</span>
          </p>
        </div>
      </div>
      `;
      ui.appendChild(iu1);
    }
  );
}
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
console.log(
  `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${myParam}`
);
fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${myParam}`)
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("jidden");
    console.log(1);
    creat(data.drinks);
  })
  .catch((eror) => {});
