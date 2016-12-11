// 判断一个对象是否是数组
var is_array = function (value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
}