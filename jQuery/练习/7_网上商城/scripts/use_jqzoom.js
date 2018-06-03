/*使用jqzoom*/
$(function(){
	$('.jqzoom').jqzoom({
		zoomType: 'standard',/*遮罩层样式*/
		lens:true,/*鼠标滑入显示遮罩层*/
		preloadImages: false,/*预加载*/
		alwaysOn:false,/*初始是否显示遮罩层*/
		zoomWidth: 340,/*放大图片的宽高*/
		zoomHeight: 340,
		xOffset:10,/*放大图片距离原始图片距离*/
		yOffset:0,
		position:'right'/*放大图片位置*/
    });
});