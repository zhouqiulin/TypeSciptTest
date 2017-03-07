var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="interface.js" />
(function () {
    //基本使用
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        return Greeter;
    }());
    var a = new Greeter("zhouqilin");
    console.log(a.greeting);
    //继承
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceMeters) {
            console.log(this.name + " move " + distanceMeters + "m.");
        };
        return Animal;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceMeters) {
            if (distanceMeters === void 0) { distanceMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceMeters);
        };
        return Snake;
    }(Animal));
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
    //Private 修饰符---私有
    //Protected修饰符---派生类可以访问
    //抽象类
    var Animal2 = (function () {
        function Animal2() {
        }
        Animal2.prototype.move = function () {
            console.log('roaming the earch...');
        };
        return Animal2;
    }());
})();
