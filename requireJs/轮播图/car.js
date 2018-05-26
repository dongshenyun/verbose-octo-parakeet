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
        this.default = {
            buttonType: 'squire',//circle squire
            btnPos: 'bottom', //center bottom
            speed: '1000'
        };
        ``
        option = $.extend(this.default, option);//重复的覆盖 不重复的默认
        for (var i = 0; i < option.imgData.length; i++) {
            this.$tab.append(`<li class="${i == 0 ? 'selected ' + option.buttonType : option.buttonType}">${i + 1}</li>`);
            this.$imgBox.append(`<img class="${i == 0 ? 'selected' : ''}" src="${option.imgData[i]}" alt="">`)
        }

                this.$prev.addClass('carousel-prev-'+option.btnPos);
                this.$next.addClass('carousel-next-'+option.btnPos);
                this.$container.append(this.$imgBox).append(this.$tab).append(this.$prev).append(this.$next);
                $(option.selector).append(this.$container);
            };
            return Carousel;
        });