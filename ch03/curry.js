// 通过给 Function.prototype 增加一个 method 方法，下次给对象增加方法的时候就不用键入 prototype
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('curry', function() {
    var slice = Array.prototype.slice,
        args = alice.apply(arguments),
        that = this;
    return function() {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});