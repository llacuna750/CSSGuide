const spaceMe = "-".repeat(30);
/************************************************/ console.log("\n", spaceMe, "1. Creating Objects Explainer", spaceMe, ""); /************************************************/

const product = {
    productName: 'Coffee Machine'
}

console.table(product);

/*
Well see three ways
- Factory functions
- Constructors functions
- Classes
*/

/************************************************/ console.log("\n", spaceMe, "2. Factory Functions", spaceMe, ""); /************************************************/
/* A factory function is a design pattern used in programming, particularly in languages like JavaScript, where a function creates and returns objects. */

// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function() {
//         this.score++;
//     }
// }

// console.log(gamer);
// gamer.incrementScore();
// console.log(gamer);

function gamer(name, score) {
    return  {
        name: name,
        score: score
        ,
        incrementScore: function () {
            this.score++;
        }
    }
}


// Object property value Shorthand
const laro_ero = (name, score) => {
    return {
        name,
        score,
        incrementScore () {
            this.score++;
        }
    }
}


const alice = gamer('Alice', 10);
const dave = gamer('Dave', 3);
const ash = gamer('Ash', 9);
const gab = laro_ero('Gabriel', 21);  // nagamit ang function na ( incrementScore() )  ( gab.incrementScore ) inside the function expression

gab.incrementScore(); // variable that get the return object
console.log(gab); // Log the return object in gab variable

console.table(alice);
alice.incrementScore();
dave.incrementScore();
ash.incrementScore();
dave.incrementScore();

console.log(alice);
console.log(dave);
console.log(ash);



/*
------------------------------------------- Factory Functions -------------------------------------------
============================================ Pros and Cons ============================================
          Pros                                                        Cons
- The syntax is familiar                                        - Less performant 
- The syntax is easy to read                                    - No inheritance
*/
/************************************************/ console.log("\n", spaceMe, "3. Constructor Functions", spaceMe, ""); /************************************************/
const manlalaro = {
    name: 'Dave',
    score: 0,
    incrementScore: function() {
        this.score++;
    }
}

function Gamer(name, score) {
    this.name = name;
    this.score = score;
    this.incrementScore = function() {
        this.score++;
    }
}

const daved = new Gamer('Dave', 0);
const sarah = new Gamer('Sarah', 2);

console.log(daved);
daved.incrementScore();
console.log(daved);

console.log(sarah);
sarah.incrementScore();
console.log(sarah)


