## 自定义类型

`创建自定义类型的最常见方式，是组合使用构造函数模式与原型模式`

```JavaScript
// 构造函数用于定义实例属性
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}
// 原型模式用于定义方法和共享的属性
Person.prototype = {
    constructor: Person,
    sayName: function(){
        alert(this.name);
    }
}
```

## 继承

`组合继承，将原型链和借用构造函数的技术组合到一起。使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承`

```JavaScript
function SuperType(name){
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    // 继承属性
    SuperType.call(this, name);

    this.age = age;
}
// 继承方法
SybType.prototype = new SuperType();

SubType.prototype.sayAge = function(){
    alert(this.age);
};

var instance1 = new SubType('Nicholas', 29);
instance1.colors.push('balck');
alert(instance1.colors);//"red,blue,green,black"
instance1.sayName();//"Nicholas"
instance1.sayAge();//29

var instance2 = new SubType('Greg', 27);
alert(instance2.colors);//"red,blue,green"
instance2.sayName();//"Greg"
instance2.sayAge();//27
```

## 模块模式

`如果必须创建一个对象并以某些数据对其进行初始化，同时还要公开一些能够访问这些私有数据的方法，那么就可以使用模块模式`

```JavaScript
var application = function(){
    // 私有变量和函数
    var components = new Array();
    // 初始化
    components.push(new BaseComponent());
    // 公共
    return {
        getComponentCount: function(){
            return components.length();
        },
        registerComponent: function(component){
            if(typeof component == 'object'){
                components.push(component);
            }
        }
    };
}();
```

## 函数curry化

```JavaScript
function curry(fn){
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}
function add(num1, num2){
    return num1 + num2;
}
var curriedAdd = curry(add, 5);
alert(curriedAdd(3));// 8
```