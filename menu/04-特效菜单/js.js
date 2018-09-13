
$('.nav-btn').on('click', function () {
    var iNow=$(this).index();
    var marginLeft='-'+iNow*100+'%';//显示对应二级菜单

    if ($(this).hasClass('btn-active')){
        $('#closeBtn').trigger('click');//触发点击事件
        // $('#closeBtn').click();//查找点击事件
    }
    if ($(".expand").hasClass('active')) {
        $('.expdiv').animate({marginLeft:marginLeft});//激活状态 动画
    }
    else {   //不激活状态 直接设置css
        $('.expdiv').css('marginLeft',marginLeft);
        $('.expand').animate({
            height:130
        }).addClass('active');
    }
    $(this).addClass('btn-active').siblings().removeClass('btn-active');//添加类判断是否当前a为激活状态 激活状态再次点击收起二级菜单
});
$('#closeBtn').on('click',function () {
    $('.expand').animate({
        height:0
    },function () {
       $(this).removeClass('active');//移除class 下次点击一级菜单执行if语句
    });
});