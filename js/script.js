// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// funzioni

// Programma principale

const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];


// per rpimo salviamo il campo dove stamperemo cards
const ContainerCards = document.getElementById("cards");
 
// per stampare le carte usiamo il ciclo forEach per elemento
// icons.forEach(
// 	(element) => {

// 		// destrutturazione per selezionare le proprieta dal  nostro oggetto
// 		const{name, family, prefix} = element;
// 		// attenzione "= element" e non "= icons"!!!

// 		ContainerCards.innerHTML += `<div class="card">
// 									<i class="${family} ${prefix}${name}"><div class "icon-name">${name}</div></i>
// 									</div>`;
// 					}
// 	);

// Milestone 2
// Coloriamo le icone per tipo

const coloriCategorie = {
	"food" : "green",
	"beverage": "yellow",
	"animal": "pink"
}

// attravero map creo nuovo array con aggiunta dei colori in ogni elemento-oggetto
const coloredCards = icons.map(
	(element) => {
		element.color = coloriCategorie[element.category];
		return element;
	}
);

// console.log(coloredCards);

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone


// prima creamo il ciclo per salvre le categorie in un arr
const categorie = [];
icons.forEach(element => {
	if(categorie.includes(element.category)==false){
		categorie.push(element.category);
	}
});
// console.log(categorie);

// poi con ciclo li "divediamo" per stampare uno
const filtro = document.getElementById("filtro");
categorie.forEach(
	(element)=>{
		filtro.innerHTML += `<option value="${element}">${element}</option>`
	}
);

filtro.addEventListener("change",
	function(){
		const iconsFiltered = coloredCards.filter(
			(element)=>{
				if(element.category==filtro.value){
					return true; 
					}
					return false;
				}
		);
		//  qua sara il codice per stampre icone filtrate
	}
);
