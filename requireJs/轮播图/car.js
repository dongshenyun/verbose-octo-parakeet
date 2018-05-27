/**
 * Created by Administrator on 2018/5/26 0026.
 */
define(['jquery'], function ($) {
    function Carousel() {
        this.$container = $('<div class="carousel-container"></div>');
        this.$imgBox = $('<div class="carousel-img-box"></div>');
        this.$tab = $('<ul class="carousel-tab"></ul>');
        this.$prev = $('<div class="arrows carousel-prev-bottom">&lt;</div>');
        this.$next = $('<div class="arrows carousel-next-bottom">&gt;</div>');
    }

    Carousel.prototype.init = function (option) {
        var _this=this;
        var iNow=0;
        this.default = {
            buttonType: 'squire',//circle squire
            btnPos: 'bottom', //center bottom
            speed: '1000'
        };

        option = $.extend(this.default, option);//重复的覆盖 不重复的默认
        for (var i = 0; i < option.imgData.length; i++) {
            this.$tab.append(`<li class="${i == 0 ? 'selected ' + option.buttonType : option.buttonType}">${i + 1}</li>`);
            this.$imgBox.append(`<img class="${i == 0 ? 'selected' : ''}" src="${option.imgData[i]}" alt="">`)
        }

        this.$prev.addClass('carousel-prev-' + option.btnPos);
        this.$next.addClass('carousel-next-' + option.btnPos);
        this.$container.append(this.$imgBox).append(this.$tab).append(this.$prev).append(this.$next);
        $(option.selector).append(this.$container);

        $('li',this.$tab).on('click',function () {
            iNow=$(this).index();
            change($(this).index());
        })
        function change(idx) {
            $('li',_this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
            $('img',_this.$imgBox).eq(idx).addClass('selected').siblings().removeClass('selected');
        }
        this.$next.on('click',function () {
            iNow++;
            if(iNow==option.imgData.length){
                iNow=0;
            }
            change(iNow);
        });
        this.$prev.on('click',function () {
            iNow--;
            if(iNow==-1){
                iNow=option.imgData.length-1;
            }
            change(iNow);
        });

        function run(){
            _this.timer = setInterval(function(){//自定义属性
                _this.$next.trigger('click');
            },option.speed);
        }
        run();
        this.$container.hover(function(){
            clearInterval(_this.timer);
        },function(){
            run();
        });
    };
    return Carousel;
});