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
var timer;
function run() {
    timer = setInterval(function () {
        auto();
    }, 1000);
}
oTit.onmouseover = function () {
    clearInterval(timer);
};
oTit.onmouseout = function () {
    run();
};
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
