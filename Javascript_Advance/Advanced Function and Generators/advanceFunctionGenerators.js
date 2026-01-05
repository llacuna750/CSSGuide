const spaceMe = "-".repeat(30); 

/************************************************/ console.log("\n", spaceMe, "1. Closures", spaceMe, ""); /************************************************/ 

// let firstName = 'Tom'

/*
Remember: let / const are block scoped
*/

function logFirstName() {
  let firstName = "Tom";
  console.log(firstName);
}

try {
    firstName = `John`;

    logFirstName();        
} catch (error) {
    console.log(error.message);
}



function outerFunction(param) {
    const outerVariable = 'i am from the outer function'

    /*
    The innerFunction has access of outerFunction
    - param
    - outerVariable
    */
    function innerFunction () {
        console.log(param)
        console.log(outerVariable)
    }

    return innerFunction;
}

const closure = outerFunction('i am an argument')
closure();
closure();

/************************************************/ console.log("\n", spaceMe, "2. Closures Part 2", spaceMe, ""); /************************************************/ 
/*JavaScript Closures: A closure in JavaScript is a function that remembers and 
accesses variables from its surrounding (lexical) scope, even after the outer function 
has finished executing. This is a fundamental part of the language's function-oriented nature 
and is often used for data privacy and state preservation.
*/

function scorePoint(playerName) {
    let score = 0



    // return an annon function
    return {

        displayScore: function () {
            console.log(`${playerName} has ${score} points`);
        },
        /* new Challenge:
            1. Add two more functions to this object. One to increment
            the score and one to decrement the score. Call those functions
            a couple of times for each player and then call displayScore to Check it's working.
        */

        incrementScore: () => {
            score++;
        },
        decrementScore: () => {
            score--;
        },
    };

    // return function() {
    //     score++
    //     console.log(`${playerName} has ${score} points`)
    // }
}

const player1 = scorePoint('Vicky')
const player2 = scorePoint('Leo')

try {
  player1.displayScore(); // Vicky has 0 points
  player1.incrementScore();
  player1.incrementScore(); // 3x increment the score
  player1.incrementScore();
  player1.displayScore(); // Vicky has 3 points
  player1.decrementScore(); // decrement the score
  player1.displayScore(); // Vicky has 2 points

  player2.decrementScore();
  player2.displayScore(); // Leo has -1 points

  player1(); // Vicky has 1 points
  player1(); // Vicky has 2 points
  player1(); // Vicky has 3 points
  player2(); // Leo has 1 points
  player2(); // Leo has 1 points
} catch (error) {
    console.log(error.message);
}


/************************************************/ console.log("\n", spaceMe, "3. Closures Challenge", spaceMe, ""); /************************************************/ 
/*
Challenge:
1. Write a function that simulates a simple bank account.
   The function should store the balance and enable users
   to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing
  3 functions. One for depositing money, one for
  withdrawing money, and a getBalance function which
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract
  from it.
*/

function createBankAccount(user) {
    let balance = 0;
    
    // Write logic here
    return {
        depositeMoney: function (amount) {
            console.log(
            `${user} has deposited money of $${amount} in his/her Bank Account`
            );
            balance += amount;
        },
        withdrawMoney: function(withdrawAmount) {
            const issuficientBalance = balance - withdrawAmount >= 0 ;

            (!issuficientBalance) ? console.log(`Sorry ${user} but you have issuficient Balance.`) : (balance -= withdrawAmount)
            
        },

        getBalance: function () {
            console.log(`${user} you have balance of $${balance}`);
        }
    };
}

const daveAccount = createBankAccount(`Dave`);
const wendyAccount = createBankAccount('Wendy')

daveAccount.depositeMoney(500)
daveAccount.getBalance()

wendyAccount.depositeMoney(70)
wendyAccount.getBalance()
wendyAccount.depositeMoney(6)
wendyAccount.getBalance()

wendyAccount.withdrawMoney(5)
wendyAccount.getBalance()           // Now your balance is $71 try to decrement or withdraw for 72
wendyAccount.withdrawMoney(72)      // Output: Sorry Wendy but you have issuficient Balance. 
wendyAccount.getBalance()           // Now your balance is $71 try to decrement or withdraw for 72

// Test your code by calling the functions.
