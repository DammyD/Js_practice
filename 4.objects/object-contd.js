// Make use of the constructor and factory method when you want to create multiple object
// with the same blueprint
// Literal Object
const address = {
    street: 'Ladipo',
    city: 'Lagos',
    zipCode: 1104
}
console.log(address);

// Constructor Notation
const address2 = new Object(); 
    address2.street = 'Berger';
    address2.city = 'Lagos';
    address2.zipCode = 1204;

    console.log(address2);

    // Constructor method
    function Address(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
      }

      const address3 = new Address('Rumuomasi', 'Port-Harcourt', 23466);
  
      const address4 = new Address('Oke-Ilewo', 'Abeokuta', 0000)
      
      console.log(address3)
      console.log(address4)

    // A factory function is a function that creates an object
    // factory function
    function houseAddress(street, city , zip) {
        // literal syntax
        return {
            street: street,
            city: city,
            zip: zip
        }
    }

    const address5 = houseAddress('abule-agba', 'Lagos', 28282);
    const address6 = houseAddress('iwo road', 'Ibadan', 234345);
    console.log(address5);
    console.log(address6);

    // Nested Objects
    const student = {
        firstName: 'Blessing',
        lastName: 'Dawodu',
        age: 20,
        jambScores : {
            ENG: 90,
            MTH: 85,
            PHY: 95,
            CHM: 90,
        }
    }

    console.log(student);

    let chemScore = student.jambScores.CHM; // Using dot notation
    console.log('chemScore is ' + chemScore);

    let mthScore = student['jambscore']['MTH']; // Using bracket notation
    console.log('maths score is ' + mthScore);

    // modifying created objects
    student.course = 'Computer Science';

    console.log(student);

    student.jambScore.BIO = 70;
    console.log(student);

    // Constructor method for students
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // literal method is easier but not efficient. The beauty of programming lang. is automation
    const Blessing = new Student('Blessing', 'Dawodu', 20);
    const Onome = new Student('Onome', 'Onome', 22);

    function JambScores(phy, chm, bio, govt, econs, eng, mth, lit, comm) {
        this.PHY = phy;
        this.CHM = chm;
        this.BIO = bio;
        this.GOVT = govt;
        this.ECONS = econs;
        this.ENG = eng;
        this.MTH = mth;
        this.LIT = lit; 
        this.COMM = comm;
    }

    console.log(blessing);
    blessing.jambScores = new JambScores(80, 70, 0, 0, 0, 95, 90, 0, 0);

    console.log(blessing);
    
    console.log(blessing.jambScores.mth);

    // Ass: create this using the factory method

    // Value vs Reference Types
    // Primitive Data Types: This are passed by value - String, Number, Boolean, Undefined, Null
    // Non-Primitive Data Types: This are passed by reference - Arrays, Object, Functions

    // Values
    const a = 15;
    const b = 'Nigeria';

    let c = a;
    let d = b;

    console.log(c);
    console.log(d);

    a = 20;
    b = 'US';

    console.log(a, b, c, d);

    // Reference
    // Because of the reference side effect that applies to an object
    // you cannot say an object == object. You have to apply other method
    let x = {
        value: 10
    }
    x.value = 20;
    console.log(x);
    y = x; // y is {value: 20}
    console.log(y);

    x.value = 40;
    console.log(y);

    // Next Class: Remind me, on how to copy/clone an object


    // Third class on Object

    const person = {
        name: 'Blessing',
        age: 23,
        gender: 'female'
    }
// adding/modifying an object
    person.height = '5ft';

    // factory method
    function person1(name, age, gender){
        return {
            name: name,
            age: age,
            gender: gender
        }
    }

    const person1 = person('Blessing', 23, 'female');


    // How do we copy/clone an object?
    // option 1 - Using Object.assign()

    const firstBook = {
        author: 'Chimamanda Adichie',
        title: 'HAlf of a yellow sun',
        yearPublished: 2008
    }
// Wrong way to make a copy or clone of an object
    // const secondBook = firstBook;

// correct way to make a copy/clone an object
    const secondBook = object.assign({}, firstBook)
    console.log(firstBook);
    console.log(secondBook);

    secondBook.title = 'Purple Hibiscus';

    console.log('After title of second book');
    console.log(firstBook);
    console.log(secondBook);

    // Option 2 - Using spread syntax i.e ...
    const thirdBook = {...firstBook};
    thirdBook.title = 'Americanah';
    console.log({firstBook});
    console.log({thirdBook});


    // Optin 3 - Using the method JSON.parse(JSON.Stringify(()))
    const fourthBook = JSON.parse
    // JSON - JavaScript Object Notation
    // JSON.stringify converts an object into a string and rip that object a reference effect
    // JSON.parse is a format for representing data. It reverses the conversion
    fourthBook.title = "Notes on Grief";
    console.log({firstBook});
    console.log({fourthBook});

    // the curly brace helps to label what is been logged out in the console

    // Merge Objects
    // Option 1 - Using Object.assign
    const firstBookDetails = {
        publisher:'Penguin Books',
        copiedSold: '1 million',
        pages: '502',
        edition: '3rd'
    }
// syntax
    // const firstBook = Object.assign(target, source);
    // const firstBookInfo = Object.assign(firstBook, firstBookDetails);
 Object.assign(firstBook, firstBookDetails);
    console.log({firstBook});

    // Option 2 - Using spread operator...
    const secondBookDetails = {
        publisher:'Penguin Books',
        copiedSold: '1 million',
        pages: '502',
        edition: '3rd'
    }

    const secondBookInfo = {...secondBook, secondBookDetails};
    console.log({secondBookInfo});

    // Enumeration of properties in an Object
    // for...in loops - traverses between properties

    for(const property in secondBookInfo) {
        // action to be carried out on each property
        console.log(property);
        console.log(secondBookInfo[property]);
    }

    // Object.keys()
    console.log(Object.keys(secondBookInfo));
    // for..of loops
    for (let key of Object.keys(secondBookInfo)){
        console.log(key);
        console.log(secondBookInfo[key]);
    }