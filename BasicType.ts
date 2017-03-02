(function () {


    //布尔值
    let isDone = false;

    //数字
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;

    //字符串
    let myName: string = "qiulin";

    //字符串模板
    let myFullName = `zhou${myName}`;

    //数组
    let list: number[] = [1, 2, 3];

    //元组
    let tuple: [number, string] = [1, "1"];

    //枚举
    enum Color {
        red,
        green,
        black,
    };

    //任意值
    let notSure: any = "";

    //空值


    let unusable: void = undefined;
    let unusable2: void = undefined;

    function warnUser(): void {
        alert("This is my warning message");
    }


    //Nerver类型
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message);
    }

    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }

    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {
        }
    }

    //类型断言（类似于C#中的显示转换）

    let someValue: any = "this is a string";

    let strLength: number = (<string>someValue).length;

    // 另一个为as语法：
    let someValue2: any = "this is a string";

    let strLength2: number = (someValue as string).length;





})()////基础类型




