// Make use of the constructor and factory method when you want to create multiple object
// with the same blueprint
// Literal Object
const address = {
    street: 'Ladipo',
    city: 'Lagos',
    zipCode: 1104
}
console.log(address);

// Constructor Method
const address2 = new Object(); 
    address2.street = 'Berger';
    address2.city = 'Lagos';
    address2.zipCode = 1204;

    console.log(address2);

    // factory Method
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
    const student= {
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

    // Constructor methodfor students
    function Student(fitrstName, LastName, age) {
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