/**
 * Created by Administrator on 2018/5/19 0019.
 */
$(function(){
    $("#name").focus(function(){
        if($(this).val() ==this.defaultValue){
            $(this).val("");
        }
    }).blur(function(){
        if ($(this).val() == '') {
            $(this).val(this.defaultValue);
        }
    }).on('click',function () {
        $(this).select();
    })
});