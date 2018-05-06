/**
 * Created by Administrator on 2018/4/27 0027.
 */
document.getElementById('name').focus();
/*获取焦点*/


//右键菜单开始
var oUl1 = document.getElementById("ul1");
var oLi = oUl1.getElementsByTagName("li");
//
//    function show(event)
//    {
//        oUl1.style.display = "block";
//        var left = event.clientX;
//        var top = event.clientY;
//        oUl1.style.left = left + "px";
//        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//        top+=scrollTop;
//        oUl1.style.top = top + "px";
//        return false;
//    }
document.oncontextmenu = function (e) {
    oUl1.style.display = "block";
    var left = e.clientX;
    var top1 = e.clientY;
    oUl1.style.left = left + "px";
    var top = top1 + document.documentElement.scrollTop || document.body.scrollTop;
    /*窗体滚动了*/
    oUl1.style.top = top + "px";
    if (left > 1120) {
        oUl1.style.left = left - 220 + "px";
    }
    if (top1 > 500) {
        oUl1.style.top = top - 200 + "px";
    }
    console.log(e.clientX);
//        alert(top);
    return false;
    /*阻止默认行为*/
};
for (i = 0; i < oLi.length; i++) {
    oLi[i].onclick = function () {
//            console.log(this.innerHTML);/*输出内容*/
        oUl1.style.display = "none";
    }
}
document.onclick = function () {
    oUl1.style.display = "none";
};
//右键菜单结束

/*弹层开始*/

/*手机版弹层开始*/
var oPopUp = document.getElementById("pop-up");
var oMask = document.getElementById("mask");
var oMask1 = document.getElementById("mask-1");
oPopUp.flag = true;//隐藏

function show()  //显示隐藏层和弹出层
{
    oMask.style.display = "block";  //显示隐藏层
    oMask1.style.display = "block";  //显示弹出层
}
function hide()  //去除隐藏层和弹出层
{
    oMask.style.display = "none";
    oMask1.style.display = "none";
}
oPopUp.onclick = function () {
    if (this.flag) {//真 成立
        show();
        this.flag = false;
    } else {
        hide();
        this.flag = true;
    }
}
oMask.onclick=function () {
    oMask.style.display = "none";
    oMask1.style.display = "none";
}

/*登录弹层开始*/
var oLogin = document.getElementById("login");
var oPlease = document.getElementById("s-l-btn");

oPlease.onclick = function () {
    oMask.style.display = "block";  //显示隐藏层
    oLogin.style.display = 'block';

}
function disappear() {
    oMask.style.display = "none";
    oLogin.style.display = 'none';
}
function mima() {
    document.getElementById('login-text').style.display = "block";
    document.getElementById('login-code').style.display = "none";
}
function saoma() {
    document.getElementById('login-text').style.display = "none";
    document.getElementById('login-code').style.display = "block";
}
if(oMask.style.display =="block"){
    // document.getElementById("body").style.overflow ="hidden";/*隐藏滚动条*/
    document.getElementById("body").style.position="relative";
}
/*弹层结束*/

/*小火箭开始*/

var oBtn = document.getElementById('fire');
/*获取*/

oBtn.onclick = function () {/*方法*/
//        window.scrollTo(0,0);/*直接到顶端*/

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    /*ie chrome兼容 滚动条距离上方高度*/

    var timer = setInterval(function () {
        scrollTop -= 20;
        window.scrollTo(0, scrollTop);
        if (scrollTop <= 0) {
            clearInterval(timer);
        }
    }, 2);
}
/*小火箭结束*/