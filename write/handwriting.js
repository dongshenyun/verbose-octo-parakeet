var canvasWidth = Math.min( 800 , $(window).width() - 20 );
var canvasHeight = canvasWidth;

var strokeColor = "black";
var isMouseDown = false;/*记录鼠标按下事件*/
var lastLoc = {x:0,y:0};/*上一次鼠标位置 初始0 0*/
var lastTimestamp = 0;/*时间戳*/
var lastLineWidth = -1;/*上一刻线条宽度*/

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

$("#controller").css("width",canvasWidth+"px");
drawGrid();

$("#clear_btn").click(
    function(){
        context.clearRect( 0 , 0 , canvasWidth, canvasHeight );/*清空一个指定矩形 x,y,width,height*/
        drawGrid();
    }
);
$(".color_btn").click(
    function(){
        $(".color_btn").removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
        strokeColor = $(this).css("background-color");
    }
);

function beginStroke(point){

    isMouseDown = true;
    //console.log("mouse down!")
    lastLoc = windowToCanvas(point.x, point.y);
    lastTimestamp = new Date().getTime();
}
function endStroke(){
    isMouseDown = false;
}
function moveStroke(point){

    var curLoc = windowToCanvas( point.x , point.y );
    var curTimestamp = new Date().getTime();/*时间*/
    var s = calcDistance( curLoc , lastLoc );/*两点间距离*/
    var t = curTimestamp - lastTimestamp;/*时间差*/

    var lineWidth = calcLineWidth( t , s );/*时间距离计算线条粗细*/

    //draw
    context.beginPath();
    context.moveTo( lastLoc.x , lastLoc.y );
    context.lineTo( curLoc.x , curLoc.y );

    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;/*新width*/
    context.lineCap = "round";/*填补空隙*/
    context.lineJoin = "round";/*线条更平滑*/
    context.stroke();

    lastLoc = curLoc;/*当前点变为上一点*/
    lastTimestamp = curTimestamp;/*时间*/
    lastLineWidth = lineWidth;/*线粗*/
}

canvas.onmousedown = function(e){
    e.preventDefault();
    beginStroke( {x: e.clientX , y: e.clientY} )
};
canvas.onmouseup = function(e){
    e.preventDefault();
    endStroke()
};
canvas.onmouseout = function(e){
    e.preventDefault();
    endStroke()
};
canvas.onmousemove = function(e){
    e.preventDefault();
    if( isMouseDown ){/*只有true 才有操作*/
        moveStroke({x: e.clientX , y: e.clientY})
    }
};

canvas.addEventListener('touchstart',function(e){
    e.preventDefault()
    touch = e.touches[0]
    beginStroke( {x: touch.pageX , y: touch.pageY} )
});
canvas.addEventListener('touchmove',function(e){
    e.preventDefault()
    if( isMouseDown ){
        touch = e.touches[0]
        moveStroke({x: touch.pageX , y: touch.pageY})
    }
});
canvas.addEventListener('touchend',function(e){
    e.preventDefault();
    endStroke()
});

var maxLineWidth = 30;
var minLineWidth = 1;
var maxStrokeV = 10;
var minStrokeV = 0.1;
function calcLineWidth( t , s ){/*线条粗细*/
    var v = s / t;
    var resultLineWidth;
    if( v <= minStrokeV )
        resultLineWidth = maxLineWidth;
    else if ( v >= maxStrokeV )
        resultLineWidth = minLineWidth;
    else{
        resultLineWidth = maxLineWidth - (v-minStrokeV)/(maxStrokeV-minStrokeV)*(maxLineWidth-minLineWidth);
    }
    if( lastLineWidth == -1 ){
        return resultLineWidth;
    }
    return resultLineWidth*1/3 + lastLineWidth*2/3;
}

function calcDistance( loc1 , loc2 ){/*距离*/

    return Math.sqrt( (loc1.x - loc2.x)*(loc1.x - loc2.x) + (loc1.y - loc2.y)*(loc1.y - loc2.y) );
}

function windowToCanvas( x , y ){
    var bbox = canvas.getBoundingClientRect();/*包围盒*/
    return {x:Math.round(x-bbox.left) , y:Math.round(y-bbox.top)}/*函数返回一个数字四舍五入后最接近的整数。*/
}
function drawGrid(){/*米字格*/
    context.save();/*不影响其他绘制内容*/
    context.strokeStyle = "rgb(230,11,9)";

    context.beginPath();
    context.moveTo( 3 , 3 );
    context.lineTo( canvasWidth - 3 , 3 );
    context.lineTo( canvasWidth - 3 , canvasHeight - 3 );
    context.lineTo( 3 , canvasHeight - 3 );
    context.closePath();
    context.lineWidth = 6;
    context.stroke();

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(canvasWidth,canvasHeight);

    context.moveTo(canvasWidth,0);
    context.lineTo(0,canvasHeight);

    context.moveTo(canvasWidth/2,0);
    context.lineTo(canvasWidth/2,canvasHeight);

    context.moveTo(0,canvasHeight/2);
    context.lineTo(canvasWidth,canvasHeight/2);

    context.lineWidth = 1;
    context.stroke();

    context.restore()
}