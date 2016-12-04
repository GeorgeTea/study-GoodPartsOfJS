// 函数字面量
var add = function(a, b) {
	return a + b;
}


// 方法调用模式
// this 被绑定到定义方法的对象本身
var myObject = {
	value: 0,
	increment: function(inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
console.log(myObject.value); // 1

myObject.increment(2);
console.log(myObject.value); // 3


// 函数调用模式
// this 被绑定到全局对象
myObject.double = function() {
	var that = this; // 解决 this 绑定全局对象的问题

	var helper = function() {
		that.value = add(that.value, that.value);
	};

	helper(); // 以函数的形式调用 helper
};

// 以方式的形式调用 double
myObject.double();
console.log(myObject.value); // 6


// 构造器调用模式
// 如果在一个函数前面带上 new 来调用，那么将会创建一个链接到该函数的 prototype 成员的新对象，同时 this 会被绑定到那个新对象上
// 创建一个名为 Quo 的构造器函数，它构造一个带有 status 属性的对象
var Quo = function(str) {
	this.status = str;
};

// 给 Quo 的所有实例提供一个名为 get_status 的公共方法
Quo.prototype.get_status = function() {
	return this.status;
};

// 构造一个 Quo 实例
var myQuo = new Quo('confused');
console.log(myQuo.get_status()); // confused


// Apply 调用模式
// *apply 方法接收两个参数，第一个是要绑定给 this 的值，第二个是传递给被调用方法的参数数组
// 构造一个包含两个数字的数组，并将它们相加
var array = [3, 4];
var sum = add.apply(null, array); // 7

//构造一个包含 status 成员的对象
var statusObject = {
	status: 'A-OK'
};

// statusObject 并没有继承自 Quo.prototype ，但我们可以在 statusObject 上调用 get_status 方法
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status); // A-OK