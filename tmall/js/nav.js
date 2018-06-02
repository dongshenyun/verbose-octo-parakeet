/**
 * Created by Administrator on 2018/5/21 0021.
 */

/*垂直导航栏开始*/
var arr = ["1460", "2150", "2935", "3620", "4330", "5020", "5725", "6423", "0"];
//index()获得第一个匹配元素相对于其同级元素的index位置 所有兄弟节点中的索引
var scroll = document.documentElement.scrollTop || document.body.scrollTop;

var isMouseOver = true; //控制鼠标移上移下事件和click事件的冲突 ？
$(".com-nav1").hover(function () {
    isMouseOver = true;
    $(this).addClass('spe-com-nav' + $(this).index());
}, function () {
    if (isMouseOver) {
        $(this).removeClass('spe-com-nav' + $(this).index());
    }
}).on('click', function () {
    isMouseOver = false;
    $(this).addClass('spe-com-nav' + $(this).index()).siblings().removeClass().siblings().addClass('com-nav com-nav1');
        $(window).scrollTop(arr[$(this).index()]);
});

//页面滚动事件

/*垂直导航栏结束*/