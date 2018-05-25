/**
 * Created by Administrator on 2018/5/25 0025.
 */
define(function () {
    function Dialog(obj) {
        var _this=this;
        this.$dialogMask=$('<div class="dialog-mask"></div>').on('click',function () {
            remove(_this);
        });
        this.$dialogBox=$('<div class="dialog-box">').css({
            width:obj.width,
            height:obj.height,
            background:obj.background
        });
        this.$dialogTitle=$('<div class="dialog-title">');
        this.$dialogContent=$('<div class="dialog-content"></div>').load(obj.content);
        this.$dialogH2=$('<h2>我是标题</h2>').html(obj.title);
        this.$dialogX=$('<span class="dialog-close">X</span>').on('click',function(){
            remove(_this);
        });
    }
    
    function remove(x) {
        x.$dialogMask.remove();
        x.$dialogBox.remove();
    }
    Dialog.prototype.open=function () {
        $('body').append(this.$dialogMask).append(this.$dialogBox);
        this.$dialogBox.append(this.$dialogTitle).append(this.$dialogContent);
        this.$dialogTitle.append(this.$dialogH2).append(this.$dialogX);
    };
    return Dialog;//暴露
});