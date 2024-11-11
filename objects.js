// JavaScript ha la particolarità di permetterci di creare oggetti con la cosiddetta NOTAZIONE LETTERALE,
// ovvero l'uso di graffe {} come valore di una variabile

const obj = {}; // abbiamo creato il RIFERIMENTO in memoria per un elemento di tipo oggetto (vuoto)

// quando abbiamo a che fare con elementi che non siano PRIMITIVE questi si salvano in memoria come REFERENCE

// all'interno dell'oggetto possiamo assegnare come valori associati ad una proprietà tutti i tipi primitivi: string, number, boolean, undefined, null, Symbol, BigInt
// ma anche tutti i NON PRIMITIVI ovvero Oggetti, Array, Funzioni.

// nel caso in cui una proprietà contenga una funzione quella proprietà viene definita un METODO dell'oggetto, che ne definisce particolari abilità.

console.log(obj.newProp);

// aver dichiarato l'oggetto come costante non mi impedisce di modificargli i valori delle proprietà
// la const impedisce solamente la riassegnazione totale del suo valore
obj.newProp = "new value";

// obj = {}; // la costante non mi permette di riassegnare il valore dell'intera variabile a qualcos'altro, nemmeno dello stesso tipo!
console.log(obj.newProp);

const dog = {
  breed: "Labrador",
  age: 2,
  bark: function () {
    return "BAU";
  }
};

console.log(dog.bark());

const anyFunc = function () {
  console.log("activated");
};

anyFunc();

dog.age = 3;

console.log(dog.hasOwnProperty("breed")); // true
console.log(dog.toString()); // "[object Object]"

// document.body.innerHTML += dog; // si inserirebbe una stringa "[object Object]" ad indicare l'utilizzo non corretto di un
// oggetto in questo constesto (avremmo dovuto usare i suoi valori)
document.body.innerHTML += "il mio animale domestico è un " + dog.breed + " di " + dog.age + "anni...";

// tutti i metodi pre-associati ai nostri elementi derivano da un'ereditarietà dovuta al costruttore che li ha generati

// indaghiamo la catena prototipale dei nostri elementi
console.log(dog.__proto__); // Object
console.log(dog.__proto__.__proto__); // null

const num = 5;
console.log(num.__proto__); // Number
console.log(num.__proto__.__proto__); // Object
console.log(num.__proto__.__proto__.__proto__); // null

const str = "hello";
console.log(str.__proto__); // String
console.log(str.__proto__.__proto__); // Object
console.log(str.__proto__.__proto__.__proto__); // null

const arr = [];
console.log(arr.__proto__); // Array
console.log(arr.__proto__.__proto__); // Object
console.log(arr.__proto__.__proto__.__proto__); // null

// Array.from() metodo statico che possiamo utilizzare solo sul costruttore stesso, non sulle nostre istanze

const cat = {
  name: "felix",
  "fur-type": "long and fluffy",
  "date.of.adoption": "01/01/2024",
  ancestors: { mom: "Dasy", dad: "Lucifer" }
};
// square brackets notation - ci permettono di valutare proprietà tramite strighe che dovranno corrispondere al nome della proprietà
console.log(cat["fur-type"]);
console.log(cat["date.of.adoption"]);
// ci permettono anche di valutare espressioni PRIMA della valutazione del valore stesso

const str1 = "fur";
const str2 = "type";

console.log(cat[str1 + "-" + str2]); // cat["fur-type"] =>  "long and fluffy"
console.log(cat[`${str1}-${str2}`]); // cat["fur-type"] =>  "long and fluffy"
console.log(cat[str1.concat("-").concat(str2)]); // cat["fur-type"] =>  "long and fluffy"

const str3 = "fur-type";
console.log(cat[str3]); // cat["fur-type"] =>  "long and fluffy"

const catKeys = Object.keys(cat); // ['name', 'fur-type', 'date.of.adoption', 'ancestors']
console.log(catKeys);

console.log(cat[catKeys[2]]); // cat['date.of.adoption'] => "01/01/2024"

catKeys.forEach(key => console.log(cat[key]));

const catValues = Object.values(cat); //['felix', 'long and fluffy', '01/01/2024', {…}]
console.log(catValues);

// catValues.forEach(value => console.log(value));

for (let value of catValues) {
  console.log(value);
}

const catEntries = Object.entries(cat);
console.log(catEntries);

// for (let value of catEntries) {
//   const [first, second] = value;

//   console.log("la proprietà è", first, "e il valore è", second);
// }

for (let [key, value] of catEntries) {
  console.log("la proprietà è", key, "e il valore è", value);
}

const newCat = {};
for (let [key, value] of catEntries) {
  // console.log("la proprietà è", key, "e il valore è", value);
  newCat[key] = value;
}

// abbiamo creato una copia (di primo livello) dell'oggetto cat
console.log(newCat);

newCat.name = "Garfield";
console.log(newCat);

// const anotherCat = cat; // NON E' UNA CLONAZIONE DI OGGETTO! ABBIAMO SEMPLICEMENTE DATO UN'ALTRA ETICHETTA ALLO STESSO OGGETTO, ora raggiungibile con due nomi diversi
// anotherCat.name = "another stray cat";
// console.log(anotherCat);
// console.log(cat); // l'originale ha cambiato nome!

const anotherCat = Object.assign({}, cat);
anotherCat.name = "another stray cat";

anotherCat.ancestors = Object.assign({}, cat.ancestors);

anotherCat.ancestors.mom = "another mom";
anotherCat.ancestors.dad = "another dad";
console.log(anotherCat);
console.log(cat);

// Metodo ES6 per la clonazione di oggetti

const catClone = { ...cat, name: "Speedy", ancestors: { ...cat.ancestors } };

catClone.ancestors.mom = "speedy's mom";
catClone.ancestors.dad = "speedy's dad";
console.log(catClone);
console.log(cat);

// structuredClone() (clona anche le sotto referenze in un colpo solo)

const structuredCloneCat = structuredClone(cat);
structuredCloneCat.name = "structured cat";
structuredCloneCat.ancestors.mom = "structured mom";
structuredCloneCat.ancestors.dad = "structured dad";
console.log(structuredCloneCat);
console.log(cat);
