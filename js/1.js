
/**
 * Created by Administrator on 2018/4/11 0011.
 */
var num =window.prompt("请输入一个年龄","18");
console.log("您已经活了"+num*365*24*60*60+"秒");

var aa=function () {
    console.log(hhh);
}
aa();/*只能在下面调用*/
function bb() {
    console.log(jjj);
}
bb();/*上下都可以 函数提升*/
console.log(cc);
var cc=4;/*变量提升 undefined*/