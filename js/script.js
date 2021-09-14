// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// Funzioni

//Funzione printIcons stampa icone in html
//arr - nostro array con icone, container - dove lo stampa in html
const printIcons = (arr, container) => {
	container.innerHTML = "";
	arr.forEach(
		(elm)=>{
			const{family,prefix,name,color} = elm;
			container.innerHTML += `<div class="icon">
			<i class="${family} ${prefix}${name}" style="color: ${color}"></i>
			<div class="icon-name">${name}</div>
			</div>`;
		}
	);
}

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

const colors = {
	"food": "yellow",
	"animal": "green",
	"beverage": "pink"
};

// coloraimo icone, creo nuovo array di oggetti con aggiunta di propriete "colore" tramite MAP (copia vecchio arr e lo modifica)

const iconsColored = icons.map(
	(elm)=>{
	//"mapiamo"	array icons, quindi "elm" è oggetto-icona
	//dobbiamo aggiungere il colore rispetto alla categoria:
	// console.log(elm.category); vedi tutte le categorie
	return {
		//facciamo ritoranre una nova array: 
		
		//1.coppiamo oggetto
		...elm, 
		//2.aggiungiamo la nuova proprieta
		color : colors[elm.category]
	}
}
);

console.log(iconsColored);
	
	// [] servono per accedere ai dati salvati demtro una variabile e assocciare il colore giusto alla proprieta giusta, parentesi quadri servono perche sono delle info salvate in una variabile/oggetto (nel nostro caso sono propieta dentro oggettp nel array icons)
	
	//nella MAP bisogna sempre mettere return per creare nuovo array, altrimenti non si salva niente e nuovo array sara pieno di undefined	


// seleziono container di icone 
const containerIcons = document.getElementById("icons");

//Stampo icone colorate
printIcons(iconsColored,containerIcons );


// // Ciclo su ogni icona(oggetto) per stampare tutto nel html
// icons.forEach(
// 	(elm)=>{

// 		//Attraverso destrutturazione seleziono le propriete del oggetto che mi servono per stampare icona e il nome
// 		const{family,prefix,name} = elm;
// 		// "= elm" ma non "= icons"
// 		//"elm" è ogni oggeto-icona da cui prendiamo le proprieta, senza destrutturazione dobiamo scrivere : elm.family,elm.prefix ed ecc.

// 		//3. Stampiamo icone dentro il contaner selezionato (const containerIcons = document.getElementById("icons"))

// 		containerIcons.innerHTML += `<div class="icon">
// 		<i class="${family} ${prefix}${name}"></i>
// 		<div class="icon-name">${name}</div>
// 		</div>`;
// 	}
// );



// Creiamo una select con i tipi di icone e usiamola per filtrare le icon

const iconsCategories = [];
iconsColored.forEach(
	(elm) =>{
		if(iconsCategories.includes(elm.category) == false){
			iconsCategories.push(elm.category);
		}
	}
);

//creo options: attraverso ciclo forEach seleziono ogni elemento da selectCategories
const selectCategories = document.getElementById("category")
iconsCategories.forEach(
	(elm)=> {
		selectCategories.innerHTML += `<option value="${elm}">${elm}</option>`
	}
);

//evento Change
selectCategories.addEventListener("change",
	function() {
		//recupero del valore della select
		const iconsFiltered = iconsColored.filter(
			(elm)=>{
				if(elm.category == selectCategories.value || selectCategories.value == ""){
					return true;
				}
				return false;
			}
		);
			printIcons(iconsFiltered, containerIcons);
	}
);