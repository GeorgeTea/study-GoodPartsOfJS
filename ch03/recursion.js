// 汉诺塔
// 1、移动较小的圆盘到辅助柱子
// 2、移动较大的圆盘到目标柱子
// 3、移动较小的圆盘到目标柱子
var hanoi = function(disc, src, aux, dst) {
	if (disc > 0) {
		hanoi(disc - 1, src, dst, aux);
		console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
		hanoi(disc - 1, aux, src, dst);
	}
};
hanoi(3, 'Src', 'Aux', 'Dst');


// 浏览 DOM
var walk_the_DOM = function walk(node, func) {
	func(node);
	node = node.firstChild;
	while (node) {
		walk(node, func);
		node = node.nextSibling;
	}
}

var getElementsByAttribute = function(attr, value) {
	var results = [];
	walk_the_DOM(document.body, function(node) {
		var actual = node.nodeType === 1 && node.getAttribute(attr);
		if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
			results.push(node);
		}
	});
	return results;
}