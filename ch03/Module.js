// 模块模式的一般形式：
// 一个定义了私有变量和函数的函数
// 利用闭包创建可以访问私有变量和函数的特权函数
// 最后返回这个函数，或者把它保存到一个可以访问的地方
// 该模式一般与单例配合使用。js 中单例就是用字面量表示法创建的对象


// 通过给 Function.prototype 增加一个 method 方法，下次给对象增加方法的时候就不用键入 prototype
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
}

// 替换以 & 开头 以 ; 结尾的字符
String.method('deentityify', function() {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };
    return function() {
        return this.replace(/&([^&;]+);/g, function(a, b) {
            var r = entity[b];
            return typeof r === 'string' ? r : a;
        });
    };
}());

console.log('&lt;&quot;&gt;'.deentityify());


// 序列号生成器
var serial_maker = function() {
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function(p) {
            prefix = String(p);
            return this;
        },
        set_seq: function(s) {
            seq = s;
            return this;
        },
        // 实际使用时可以将 gensym 对象传给使用者，使用者无法更改 prefix 和 seq
        gensym: function() {
            var result = prefix + seq++;
            return result;
        }
    };
};

var seqer1 = serial_maker();
seqer1.set_prefix('2016').set_seq('1000');
console.log(seqer1.gensym()); // 20161000
console.log(seqer1.gensym()); // 20161001

var seqer2 = serial_maker();
seqer2.set_prefix('2017').set_seq(1000);
console.log(seqer2.gensym()); // 20171000