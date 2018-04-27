
//轮播图开始
var oCont = document.getElementById("container");
var oBut = document.getElementById("but");
var aButLi = oBut.getElementsByTagName("li");
var oPho = document.getElementById("photo");
var aPho = oPho.getElementsByClassName("bag");
var iNow1 = 0;

for (i = 0; i < aButLi.length; i++) {
    aButLi[i].index = i;
    aButLi[i].onmouseover = function () {
        iNow1 = this.index;
        change1(this.index);
    }
}
function auto1() {
    iNow1++;
    /*找到当前图片下一个图片*/
    if (iNow1 == aButLi.length) {
        iNow1 = 0;
    }
    change1(iNow1);
}
function change1(x1) {
    for (j = 0; j < aButLi.length; j++) {
        aButLi[j].className = "";
        aPho[j].className = "bag";
    }
    aButLi[x1].className = "but-spe";
    aPho[x1].className = "bag bag-block";
}
run1();
var timer1;
function run1() {
    timer1 = setInterval(function () {
        auto1();
    }, 2000);
}
oCont.onmouseover = function () {
    clearInterval(timer1);
}
oCont.onmouseout = function () {
    run1();
}

//轮播图结束

//选项卡开始
var oTit = document.getElementById("shadow-tit");
var aDiv1 = oTit.getElementsByTagName("div");
var oCon = document.getElementById("shadow-pho");
var aDiv2 = oCon.getElementsByClassName("selected");
var iNow = 0;

for (i = 0; i < aDiv1.length; i++) {
    aDiv1[i].index = i;
    aDiv1[i].onmouseover = function () {
        iNow = this.index;
        change(this.index);//aDiv1[this.index]=this
    }
}
function change(x) {
    for (j = 0; j < aDiv1.length; j++) {
        aDiv1[j].className = "";
        aDiv2[j].className = "selected";
    }
    aDiv1[x].className = "today-1";
    aDiv2[x].className = "selected shadow-block";
}
function auto() {
    iNow++;
    /*找到当前图片下一个图片*/
    if (iNow == aDiv1.length) {
        iNow = 0;
    }
    change(iNow);
}
run();
function run() {
    timer = setInterval(function () {
        auto();
    }, 1400);
}
oTit.onmouseover = function () {
    clearInterval(timer);
}
oTit.onmouseout = function () {
    run();
}
//选项卡结束

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
    console.log(e.clientY);
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

//隐藏列表开始
var oNone = document.getElementById("sub-sub-classify");
var aNone = oNone.getElementsByClassName("sub-sub-classify1");
//    console.log(aNone);
var aFir = document.getElementsByClassName("fir");
for (i = 0; i < aNone.length; i++) {
    aNone[i].index = i;
    aNone[i].onmouseover = function () {
        for (j = 0; j < aNone.length; j++) {
            aFir[j].style.display = "none";
        }
        aFir[this.index].style.display = "block";
    }
    aNone[i].onmouseout = function () {
        aFir[this.index].style.display = "none";
    }
}
//隐藏列表结束

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
    document.getElementById("body").style.overflow ="hidden";/*隐藏滚动条*/
    document.getElementById("body").style.position="relative";/*隐藏滚动条*/
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
