/**
 * Created by Administrator on 2018/4/28 0028.
 */
window.onload = function () {
    var domShopCart = document.getElementById('shopCart');
    var addToCart = document.getElementById('addToCart');
    addToCart.onclick = function () {
        var nStartX = addToCart.offsetLeft + 100,
            nStartY = addToCart.offsetTop - document.body.scrollTop,
            nEndX = domShopCart.offsetLeft,
            nEndY = domShopCart.offsetTop,
            nTopX = nEndX - 10,
            nTopY = nEndY - 8;

        var x = nStartX,y = nStartY;

        //新建一个内容
        var domGood = document.createElement('div');
        domGood.style.width = '20px';
        domGood.style.height = '20px';
        domGood.style.background = 'blue';
        domGood.style.position = 'fixed';
        domGood.style.left = nStartX + 'px';
        domGood.style.top = nStartY + 'px';
        document.body.appendChild(domGood);

        var a = ((nStartY - nEndY) * (nStartX - nTopX) - (nStartY - nTopY) * (nStartX - nEndX)) / ((nStartX * nStartX - nEndX * nEndX) * (nStartX - nTopX) - (nStartX * nStartX - nTopX * nTopX) * (nStartX - nEndX));
        var b = ((nEndY - nStartY) - a * (nEndX * nEndX - nStartX * nStartX)) / (nEndX - nStartX);
        var c = nStartY - a * nStartX * nStartX - b * nStartX;
        var timer = setInterval(function () {
            /*y = a * x*x + b*x +c;*/
            if (x < nEndX) {
                x = x + 10;
                y = a * x * x + b * x + c;
                domGood.style.left = x + 'px';
                domGood.style.top = y + 'px';
            }else {
                domGood.parentNode.removeChild(domGood);
                clearInterval(timer);
            }

        }, 20);
    }
}