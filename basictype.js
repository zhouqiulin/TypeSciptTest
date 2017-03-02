(function () {
    //布尔值
    var isDone = false;
    //数字
    var decLiteral = 6;
    var hexLiteral = 0xf00d;
    var binaryLiteral = 10;
    var octalLiteral = 484;
    //字符串
    var myName = "qiulin";
    //字符串模板
    var myFullName = "zhou" + myName;
    //数组
    var list = [1, 2, 3];
    //元组
    var tuple = [1, "1"];
    //枚举
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["black"] = 2] = "black";
    })(Color || (Color = {}));
    ;
    //任意值
    var notSure = "";
    //空值
    var unusable = undefined;
    var unusable2 = undefined;
    function warnUser() {
        alert("This is my warning message");
    }
    //Nerver类型
    // 返回never的函数必须存在无法达到的终点
    function error(message) {
        throw new Error(message);
    }
    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }
    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop() {
        while (true) {
        }
    }
    //类型断言（类似于C#中的显示转换）
    var someValue = "this is a string";
    var strLength = someValue.length;
    // 另一个为as语法：
    var someValue2 = "this is a string";
    var strLength2 = someValue.length;
})(); ////基础类型
