module.exports = {
    /**
     * Return an object with a next() property. Each time the next function
     * is called the value returned is one higher than the time before.
     *
     *  let c = closures.counter(2);
     *  c.next(); // return 3
     *  c.next(); // return 4
     *  c.next(); // return 5
     */
    counter: function (start) {
        return {
            next: function () {
                return ++start;
            },
        };
    },

    /**
     * Return an object with a discount() property. The discount property should
     * accept an amount that the original price should be discounted by. This
     * should not affect the original amount!
     *
     *  let tot = closures.total(20);
     *  tot.discount(0.50); // return 10
     *  tot.discount(0.20); // return 16
     */
    total: function (amount) {
        return {
            discount: function (percentOff) {
                return amount - (amount * percentOff);
            },
        };
    },

    /**
     * Set the name of a user. Only valid names can be provided. A `valid` name is
     * one that matches the regex ^[A-Za-z ]+$.
     *
     *  let user = closures.user();
     *  user.setName('Francis Bacon');  // return true
     *  user.getName();                 // return 'Francis Bacon'
     *  user.setName('123 hi');         // return false
     *  user.getName();                 // return 'Francis Bacon'
     */
    user: function () {
        let reg = new RegExp('^[A-Za-z ]+$');
        let name = '';

        return {
            setName: function (input) {
                if (reg.test(input)) {
                    name = input;
                }
                return reg.test(input);
            },
            getName: function (output) {
                return name;
            },
        };
    },

    /**
     * Track the number of lives remaining in a game.
     *
     *  let lives = closures.lives(5);
     *  lives.died();
     *  console.log(lives.left()); // 4
     *  lives.died();
     *  console.log(lives.left()); // 3
     *  lives.restart();
     *  console.log(lives.left()); // 5
     */
    lives: function (start) {
        return {
            left: function () {
                return start;
            },
            died: function () {
                return --start;
            },
            restart: function () {
                return start;
            },
        };
    },

    /**
     * Return a string that contains the 'message id' before the message text.
     * The message ID starts at one and increments with each record.
     *
     *  let logger = closures.messages();
     *  let msg = logger.record('first message');
     *  console.log(msg); // '[1] first message'
     *  msg = logger.record('second message');
     *  console.log(msg); // '[2] second message'
     */
    messages: function () {
        // let id = 0;

        // return {
        //     record: function(msg) {
        //     id++;
        //     string = id + msg;
        //     },
        // };
        // let logger = 
    },

    /**
     * Create a pocket object that can contain COINS and TRINKETS. The pocket
     * allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
     * coins. You can also return the number of coins() or trinkets().
     *
     * You can't have a negative number of coins or trinkets.
     *
     *  let pocket = closures.pocket(50);
     *  pocket.buy(); // buy for 10 coins
     *  console.log(pocket.coins()); // 40
     *  console.log(pocket.trinkets()); // 1
     *
     *  pocket.buy();
     *  console.log(pocket.coins()); // 30
     *  console.log(pocket.trinkets()); // 2
     *
     *  pocket.sell();
     *  console.log(pocket.coins()); // 35
     *  console.log(pocket.trinkets()); // 1
     */
    pocket: function (start) {
        return {
            pocket: function (coins) {
            
            }
        };
    },

    /**
     * Return a function that accepts the value to multiply `val` by.
     *
     *  multiply(3)(5); // return 15
     */
    multiply: function (val) {
        return {
            function () {
                let val = (num * nums);
            },
        } ;
    },
};