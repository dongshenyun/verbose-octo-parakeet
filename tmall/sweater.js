/**
 * Created by Administrator on 2018/4/27 0027.
 */
var oMore1=document.getElementById("more1");
var oImg=document.getElementById("img");
var oSpe=document.getElementById("spe-lef");
var flag=true;//more
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
    oImg.style.overflow="auto";
    oImg.style.height="210px";
    oSpe.style.height="208px";
}
function close() {
    oImg.style.overflow="hidden";
    oImg.style.height="105px";
    oSpe.style.height="103px";
}