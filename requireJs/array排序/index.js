/**
 * Created by Administrator on 2018/5/20 0020.
 */
require(['sort'],function (sort) {
    var arr=[1,21,45,6,10,3,14];
    var str='hi';
    var dog={
        name:"goofy",
        age:"3"
    };
    console.log(sort(arr));
    console.log(sort(str));
    console.log(sort(dog));
})