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

/*垂直导航栏开始*/
var color=["#64c333","#ff0036","#ea5f8d","#0aa6e8","#00b262","#f15453","#19c8a9","#000"];
var arr=["1460","2150","2935","3620","4330","5014","5725","6410","0"];
var navVer=document.getElementsByClassName("com-nav1");
// var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
for (i=0;i<navVer.length;i++){
    navVer[i].index=i;
    navVer[i].onclick=function () {
        document.documentElement.scrollTop=arr[this.index];
        for(j=0;j<navVer.length-1;j++){/*遍历添加样式 是数组*/
           navVer[j].style.background="#666666";
        }
        this.style.background=color[this.index];

    }
}
/*垂直导航栏结束*/