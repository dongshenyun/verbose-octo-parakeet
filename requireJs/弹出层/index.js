/**
 * Created by Administrator on 2018/5/25 0025.
 */
// requirejs.config({
//     paths: {
//         jquery: 'jquery-1.12.4'
//     }
// });

// require(['jquery','dialog2'],function ($,Dialog){//$将JQuery暴露出来的
require(['dialog2'], function (Dialog) {//$将JQuery暴露出来的
    $('#btn').on('click', function () {
        var dialog1 = new Dialog({
            width: 200,
            height: 200,
            background: 'red',
            title: '登录',
            content: "login.html"
        });
        dialog1.open();
    });
    $('body').on('click', '.confirm-btn', function () {
        var dialog2 = new Dialog({
            width: 100,
            height: 100,
            background: 'yellow',
            title: '登录',
            content: "input.html"
        });
        dialog2.open();
    });
});