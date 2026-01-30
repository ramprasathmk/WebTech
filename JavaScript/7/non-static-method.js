// Class Player
class Player {
    constructor(name, age, sport, role) {
        this.name = name;
        this.age = age;
        this.sport = sport;
        this.role = role;
    }

    // non static method
    info() {
        console.log(`Hello from non static method of ${this.name} player`);
    }

    // static method
    static greet() {
        console.log(`Greetings from static method of ${this.name} player`);
    }
};


// Implementation of Player Class
let kagi = new Player("Kagiyama", 19, "Volley Ball", "Setter");
// let shoyo = new Player("Shoyo", 20, "Volley Ball", "Spiker");
// let noya = new Player("Noya", 21, "Volley Ball", "Libero");
let shoyo = {
    name: "Shoyo",
    age: 20,
    sport: "Volley Ball",
    role: "Spiker",

    info() {
        console.log("Hi, I'm Shoyo :)");
    }
};

let noya = {
    name: "Noya",
    age: 21,
    sport: "Volley Ball",
    role: "Libero",

    info() {
        console.log("Hi, I'm Noya :)");
    }
};

kagi.info();
shoyo.info();
noya.info();

Object.freeze(shoyo)

kagi.age = 22;
noya.age = 23;
shoyo.role = "Middle Blocker"

Player.greet();
Player.greet();
Player.greet();

const players = [kagi, shoyo, noya];

// console.table(Object.entries(kagi));
// console.table(players);

players.forEach( (e) => console.log(e))

