/**
 * Created by Administrator on 2018/5/20 0020.
 */
define(['isArray'],function (isArray) {
    function sort(array) {
      if(isArray(array)){//如果是真
          array.sort(function (x,y) {
              return x-y;//small-big
          });
          return array;
      }
      return '请输入数组';
    };
    return sort;//sort()是调用函数 返回方法不要括号
})