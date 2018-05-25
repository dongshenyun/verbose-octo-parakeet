/**
 * Created by Administrator on 2018/5/25 0025.
 */
define(function () {
    var dialog = {
        open: function (obj) {
            var html =
                '<div class="dialog-mask"></div>' +
                '<div class="dialog-box">' +
                    '<div class="dialog-title">' +
                      '<h2>我是标题</h2>' +
                        '<span class="dialog-close">X</span>' +
                    '</div>' +
                    '<div class="dialog-content"></div>' +
                '</div>';
            $('body').append(html);
            $('.dialog-box').css({
                width:obj.width,
                height:obj.height,
                background:obj.background
            })
            $('.dialog-title h2').html(obj.title);
            $('.dialog-content').load(obj.content);
            $('body').on('click','.dialog-mask,.dialog-close,.confirm-btn',function () {
                $('.dialog-mask,.dialog-box').remove();
            })
        }
       /* close: function () {

        }*/
    };
    return dialog;//暴露
});