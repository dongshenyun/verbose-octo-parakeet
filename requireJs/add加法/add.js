/**
 * Created by Administrator on 2018/5/20 0020.
 */
define(function () {
    function add(x,y) {
        return x+y;
    }
    return add;//add 是局部函数 需要暴露
})