// Closures in JavaScript

// A closure is a function that has access to variables from its outer (enclosing) scope,
// even after the outer function has finished executing.

// Example 1: Basic Closure
function outerFunction() {
    let outerVariable = 'I am from outer scope';

    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Outputs: "I am from outer scope"

// Example 2: Closure with parameters
function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(`Count: ${count}`);
    };
}

const counter = createCounter();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

// Example 3: Closure in a loop (common gotcha)
function createFunctions() {
    let functions = [];

    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(`Function ${i}`);
        });
    }

    return functions;
}

const funcs = createFunctions();
funcs[0](); // Function 0
funcs[1](); // Function 1
funcs[2](); // Function 2

// Example 4: Private variables using closures
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited ${amount}. New balance: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${balance}`);
            } else {
                console.log('Insufficient funds');
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
account.deposit(50); // Deposited 50. New balance: 150
account.withdraw(30); // Withdrew 30. New balance: 120
console.log(account.getBalance()); // 120

// Example 5: Module pattern using closures
const calculator = (function() {
    let result = 0;

    return {
        add: function(x) {
            result += x;
            return result;
        },
        subtract: function(x) {
            result -= x;
            return result;
        },
        multiply: function(x) {
            result *= x;
            return result;
        },
        divide: function(x) {
            if (x !== 0) {
                result /= x;
            }
            return result;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
        }
    };
})();

calculator.add(10);
calculator.multiply(2);
console.log(calculator.getResult()); // 20
