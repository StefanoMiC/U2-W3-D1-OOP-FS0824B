// gli oggetti in JS sono semplici da realizzare --> {} (notazione letterale)
// a patto che sia un singolo oggetto o finché siano pochi...
// il problema nasce quando abbiamo necessità di crearne molti in serie,
// magari tutti anonimi e indipendenti tra loro, ma con le stesse coppie chiave/valore da rispettare

const methodFunc = function () {
  // mentre una variabile qualsiasi sarebbe statica nel suo valore nel tempo, ci possiamo avvalere di una keyword dinamica che
  // conterrà sempre il giusto riferimento dell'oggetto di appartenenza se la funzione è stata creata con keyword function

  // la variabile person potrebbe cambiare nel tempo, potrebbe non essere disponibile sempre ecc..
  // potremmo volerci riferire ad un'altra variabile di un oggetto simile che sia nato dalla clonazione di questo (quindi avrebbe un nome diverso)
  // con il THIS risolviamo questi problemi, perché acquisirà come valore il riferimento all'oggetto di appartenenza in automatico.

  console.log("this interno", this);
  // con il this troviamo il riferimento dinamico all'oggetto di apparteneza nel quale il metodo è stato inserito
  console.log(this.name + " " + this.surname);

  const anotherFunc = () => {
    console.log("this interno", this); // questo this grazie alla arrow function riceve il suo valore dal contesto lessicale in cui è scritto (da un livello più esterno)
  };

  anotherFunc();
};

const person = {
  name: "Gianni",
  surname: "Morandi",
  sayMyName: methodFunc
};

person.sayMyName();

const person2 = {
  name: "Claudio",
  surname: "Baglioni",
  sayMyName: methodFunc
};

person2.sayMyName();

// esempio di utilizzo concreto di THIS esterni e interni

const teacher = {
  name: "Stefano",
  surname: "Miceli",
  skills: ["HTML", "CSS", "JS"],
  myMethod: function () {
    console.log("outer THIS", this);
    this.skills.forEach(skill => {
      console.log("Ciao sono " + this.name + " " + this.surname + " sono specializzato in " + skill);
    });

    // setTimeout(() => {
    //   // grazie alla arrow function siamo riusciti a mantenere il valore del this associato al nostro oggetto, con una funzione normale si sarebbe perso.
    //   console.log("timeout THIS", this);
    // }, 1000);
  }
};

teacher.myMethod();

// passiamo all'esigenza di creare oggetti in serie:

// 1) Funzione costruttrice (CONSTRUCTOR FUNCTION)
// queste funzioni per convenzione DOBBIAMO definirle in PascalCase (tutte le prime lettere maiuscole)
// questo serve ad indicare un utilizzo preciso della funzione, che andrà utilizzata solamente in un modo diverso da come useremmo funzioni normali.
// quindi è importante rispettare questa convenzione

// vanno create SEMPRE con keyword function e non in forma di freccia
// questa funzione genererà un oggetto!
const Person = function () {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
};

// istanziare questa funzione lo si fa attraverso la keyword new
const giuseppeVerdi = new Person();
giuseppeVerdi.name = "Giuseppe";
giuseppeVerdi.surname = "Verdi";
console.log(giuseppeVerdi);

const DynamicPerson = function (_name, _surname, _address, _email, _charMethod, _skills = []) {
  this.name = _name;
  this.surname = _surname;
  this.address = _address;
  this.email = _email;
  this.charMethod = _charMethod;
  this.skills = _skills;
};

const charMethod = function () {
  console.log(this.name + " " + this.surname);
};

const marioSuper = new DynamicPerson("Mario", "Super", "Yoshi Island", "super@mario.com", charMethod);
console.log(marioSuper);
marioSuper.charMethod();

const warioSuper = new DynamicPerson("Wario", "Super", "Wario's Castle", "super@wario.com", charMethod);
console.log(warioSuper);
warioSuper.charMethod();

DynamicPerson.prototype.sayHello = function () {
  console.log("hey boyz and girlz I'm " + this.surname + " and my name is " + this.name);
};

marioSuper.sayHello();
warioSuper.sayHello();
