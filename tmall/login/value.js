/**
 * Created by Administrator on 2018/6/20 0020.
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
    })
});