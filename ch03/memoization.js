// 记忆，缓存已计算过的结果，加速程序计算速度
var fibonacci = function() {
    var memo = [0, 1];
    var fib = function(n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();
console.log(fibonacci(10));

// 抽象的记忆函数
// memo 缓存计算结果，formula 表示计算公式
var memoizer = function(memo, formula) {
    var recur = function(n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            // 当前值没有缓存，则调用公式计算
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

var fibonacci = memoizer([0, 1], function(recur, n) {
    return recur(n - 1) + recur(n - 2);
});

var factorial = memoizer([1, 1], function(recur, n) {
    return recur(n - 1) * n;
});