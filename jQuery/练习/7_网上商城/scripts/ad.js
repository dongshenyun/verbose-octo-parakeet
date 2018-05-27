// /* 首页大屏广告效果 */
// $(function(){
// 	var $imgrolls = $("#jnImageroll div a");
// 	$imgrolls.css("opacity","0.7");
//     var len  = $imgrolls.length;
// 	var index = 0;
// 	var adTimer = null;
// 	$imgrolls.mouseover(function(){
// 		index = $imgrolls.index(this);
// 		showImg(index);
// 	}).eq(0).mouseover();
// 	//滑入 停止动画，滑出开始动画.
// 	$('#jnImageroll').hover(function(){
// 			if(adTimer){
// 				clearInterval(adTimer);
// 			}
// 		 },function(){
// 			adTimer = setInterval(function(){
// 			    showImg(index);
// 				index++;
// 				if(index==len){index=0;}
// 			} , 5000);
// 	}).trigger("mouseleave");
// })
// //显示不同的幻灯片
// function showImg(index){
// 	var $rollobj = $("#jnImageroll");
// 	var $rolllist = $rollobj.find("div a");
// 	var newhref = $rolllist.eq(index).attr("href");
// 	$("#JS_imgWrap").attr("href",newhref)
// 			 .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
// 	$rolllist.removeClass("chos").css("opacity","0.7")
// 			 .eq(index).addClass("chos").css("opacity","1");
// }

/*轮播图*/
$(function () {
    var timer;
    var iNow = 0;
    var $smallA = $('#jnImageroll div a').on('mouseover', function () {
        change($(this).index());
        iNow = $(this).index();
    });
    run();
    var $bigImg = $('#jnImageroll a img');
    $('#jnImageroll').hover(function () {
        clearInterval(timer);
    }, function () {
        run();
    });
    function run() {
        timer = setInterval(function () {
            iNow++;
            if (iNow == $bigImg.length) {
                iNow = 0;
            }
            change(iNow);
        }, 2000);
    }

    function change(idx) {
        $smallA.eq(idx).addClass('chos').siblings().removeClass('chos');
        $bigImg.eq(idx).addClass('JS_imgWrap').siblings().removeClass('JS_imgWrap');
    }
});