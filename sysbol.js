//Sysbol
(function () {
    //声明
    var sym1 = Symbol();
    var sym2 = Symbol("key"); // 可选的字符串key
    console.log(sym1);
    var list = [4, 5, 6];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var i = list_1[_i];
        console.log(i);
    }
})();
