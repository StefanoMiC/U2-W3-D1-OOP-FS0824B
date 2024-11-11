// abbiamo visto che JS è un linguaggio di programmazione orientato agli oggetti
// la differenza principale, tuttavia, con altri linguaggi di programmazione più classici
// come Java, C#, C++ è che JS si basa sul concetto di PROTOTIPO, mentre gli altri si
// basano sul concetto di CLASSE

// grazie alle classi, gli altri linguaggi permettono di estendere le funzionalità
// di una struttura principale creando delle "sottovarianti", delle "sottoclassi"

// let obj = {}
// in JS è possibile creare un oggetto direttamente con le {} senza avere il costruttore,
// mentre in tutti i classici linguaggi OOP questo non è possibile: è necessario avere
// PRIMA la classe, e poi se ne deriva l'istanza (l'oggetto)

// negli altri linguaggi non è possibile modificare uno "stampino" dopo la sua creazione
// mentre in JS come abbiamo visto ieri è possibile agire sui prototipi

// con il passare del tempo e l'introduzione di ES6 anche JS ha cominciato a permettere
// a suoi sviluppatori di utilizzare il concetto di "classe", uniformando gli approcci
// con altri linguaggi più blasonati e rendendo più facile la transizione a sviluppatori
// provenienti da questi linguaggi.

class Person {
  constructor(name, surname, age, email, skills = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.skills = skills;
  }

  // i metodi delle classi vengono creati dentro al contesto della classe, ma fuori dal costruttore

  // si creano senza particolari keyword, ma come fossero delle definizioni di funzioni classiche

  showName() {
    return "Ciao ragazzi mi chiamo " + this.name + " " + this.surname + "!";
  }
}

const valentinoRossi = new Person("Valentino", "Rossi", 49, "vale.rossi@gmail.com", ["GP Winner", "Super Bike Rider", "Funny Person"]);

console.log(valentinoRossi);
console.log(valentinoRossi.showName());

// EREDITARIETA' delle classi
class Developer extends Person {
  constructor(name, surname, age, email, specialty, languages = [], skills = []) {
    // devo far arrivare le proprietà name, surname, age, email, skills alla classe Person
    // Person è definita la SUPERCLASSE di Developer
    super(name, surname, age, email, skills);

    // qui sotto invece gestiamo le nuove proprietà
    this.specialty = specialty;
    this.languages = languages;
  }

  showFullDescription() {
    // posso trattare il metodo come una qualunque altra funzione, quindi poter fare diverse operazioni prima di ritornare un valore
    // this.languages.forEach(lang => console.log(lang));

    // super mi permette di chiamare metodi della superclasse (o istanza principale in questo caso)
    // andando a comporre un messaggio più specifico sulla base di quello precedente
    return super.showName() + " sono esperto in " + this.specialty;
  }
}

const stefanoDev = new Developer(
  "Stefano",
  "Miceli",
  35,
  "stefano@gmail.com",
  "React",
  ["HTML", "CSS", "JS", "React"],
  ["Teaching", "Graphic Design", "UX Design"]
);

console.log(stefanoDev);
console.log(stefanoDev.showFullDescription());
