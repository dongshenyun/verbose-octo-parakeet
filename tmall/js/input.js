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
    }).keyup(function(e){
        if(e.which == 13){
            alert('回车提交表单!');
        }
    })
})