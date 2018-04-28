/**
 * Created by Administrator on 2018/4/27 0027.
 */
var oMore1 = document.getElementById("more1");
var oImg = document.getElementById("img");
var oSpe = document.getElementById("spe-lef");
console.log(oSpe);
var flag = true;//more
oMore1.onclick = function () {
    if (this.flag) {//真 成立
        more();
        this.flag = false;
    } else {
        close();
        this.flag = true;
    }
}
function more() {
    oImg.style.overflow = "auto";
    oImg.style.height = "210px";
    oSpe.style.height = "208px";
}
function close() {
    oImg.style.overflow = "hidden";
    oImg.style.height = "105px";
    oSpe.style.height = "103px";
}

//ww图标跳动

//    setTimeout("jump()",5);
var t=0,a=20,v=t*a,s=5,updown=true;// s路程,a加速度,t时间,updown判断上升还是下降
var aSpeWw=document.getElementsByClassName("spe-ww");
// var aSpeWw=document.getElementById("skip");

console.log(aSpeWw)
function jump(){
    if(t<=0){
        updown=true;
    }else if(t*t*a>=s){
        updown=false;
    }
    if(updown){
        t=t+0.01
    }else{
        t=t-0.01;
    }
//        $("#i").css("top",(t*t*a)+"px");// 设置图片的top值
    for (i = 0; i < aSpeWw.length; i++) {/*遍历添加样式 数组*/
        aSpeWw[i].style.top=t*t*a+57+"px";
    }

//        setTimeout("jump()",5);
}
setInterval(function(){jump()},1);
