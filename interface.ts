(function () {
    //1接口声明
    interface myinterface {
        a: string;
    }

    //可选属性
    interface myinterface2 {
        a?: string;
    }
    //只读属性
    interface myinterface3 {
        readonly a: string;
    }
    //函数类型
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    //可索引类型
    interface StringArray {
        [index: number]: string;
    }


})();