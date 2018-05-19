/**
 * Created by Administrator on 2018/5/13 0013.
 */
function removeCookie(key) {
    setCookie(key,'',)
}
function getCookie(key) {
    var aCookie = document.cookie;
    var arr = aCookie.split('; ');
    for (i = 0; i < arr.length; i++) {//再分割数组中每个
        var arr1 = arr[i].split('=');
        if (arr1[0] == key) {
            return arr1[1];
        }
    }
}
function setCookie(key, val, day) {
    var str = key + "=" + val + ';';
    if (day) {
        var d = new Date();
        d.setDate(d.getDate() + day);
        str += "expires=" + d;
    }
    document.cookie = str;
}