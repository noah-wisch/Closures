/**
 * Closures and IIFE's: 
 * Two very common ways to use scopres in JS. 
 * Closures are one of the most reveredfeatures of the JS language.
 * 
 * Closures: preserving a function's scope after the function finishes
 * executing - do this so we can use it later
 *
 * IIFE: 'Immediately invoked function expression'
 */

// function makeABank() {
//     let balance = 0;
//     let active = true;

//     return {
//         money: balance,
//     };
// }

// let bank = makeABank();
// console.log(bank.money);

function makeVendingMachine() {
    let money = 100;
    let foods = ['pepsi', 'chips', 'old pancakes'];

    return {
        buy: function () {
            console.log('all kidns of googies');
            money = money + 1.25;
            foods.pop() // remove an item in the VM
            console.log('got a ' + food + '; machine has $' + money);
        },
        restock: function () {
            foods.push('chikcen salad');
            foods.push('tuna');
            foods.push('more old pancakes');

            console.log(foods);
        },
    };
}

let vending = {
    money: 100,
    foods =[],
};

let vm = makeVendingMachine
vm.buy();
