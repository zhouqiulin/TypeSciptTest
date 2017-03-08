//函数

(function () {
    //一般函数

    function add(x: number, y: number): number {
        return x + y
    }
    //匿名函数
    let myAdd = function (x, y) { return x + y; };

    let myAdd2: (x: number, y: number) => number =
        function (x: number, y: number): number { return x + y; };


    //可选参数,可选参数必须跟在必须参数后面,
    function buildName(firstName: string, lastName?: string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    //我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数
    function buildName2(firstName: string, lastName = "Smith") {
        return firstName + " " + lastName;
    }


    //箭头函数能保存函数创建时的this值，而不是调用时的值
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    alert("card: " + pickedCard.card + " of " + pickedCard.suit);



})();


