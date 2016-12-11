Object.create = function (o) {
	var F = function(){};
	F.prototype = o;
	return new F();
}

// 通过给 Function.prototype 增加一个 method 方法，下次给对象增加方法的时候就不用键入 prototype
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}