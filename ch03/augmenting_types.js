// 通过给 Function.prototype 增加一个 method 方法，下次给对象增加方法的时候就不用键入 prototype
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}

// 增加取整方法
Number.method('integer', function() {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log((-10 / 3).integer()); // -3
console.log((10 / 3).integer()); // 3

// 增加移除字符串首尾空白的方法
String.method('trim', function() {
	return this.replace(/^\s+|\s+$/g, '');
});
console.log('  neat  '.trim());