/// <reference path="interface.js" />
(function () {
    //基本使用
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
    }

    var a = new Greeter("zhouqilin");
    console.log(a.greeting);


    //继承

    class Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        move(distanceMeters: number) {
            console.log(`${this.name} move ${distanceMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string) {
            super(name)
        }
        move(distanceMeters = 5) {
            console.log("Slithering...");
            super.move(distanceMeters);

        }

    }
    class Horse extends Animal {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }
    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34);

    //Private 修饰符---私有
    //Protected修饰符---派生类可以访问

   //抽象类
   abstract class Animal2 {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}









})();

