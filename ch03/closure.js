// value 对于 increment 和 getValue 方式是可见的，但函数的作用域使得它对其他程序不可见
var myObject = (function() {
	var value = 0;
	return {
		increment: function(inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function() {
			return value;
		}
	};
}());


