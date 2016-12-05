// 通过给 Function.prototype 增加一个 method 方法，下次给对象增加方法的时候就不用键入 prototype
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
}

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