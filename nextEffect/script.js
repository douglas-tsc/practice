
Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

$(function(){
    var $slider = $('.slider'),
        $wrapper = $slider.find('.slide-wrapper'),
        $slides = $slider.find('.slide'),
        slideWidth = $slider.width();

    if(!$slides.filter('.active').length){
        $slides.first().addClass('active');
    }

    var totalWidth = 0;
    $slides.each(function(){
        var $self = $(this),
            width = $self.innerWidth();
        totalWidth += width;

        $self.css('width', width);
    });

    $wrapper.css('width', totalWidth);

    $slider.find('.text').each(function(){
        var $self = $(this),
            text = $self.text(),
            newText = text.split(/[\s,]+/);

        if(newText.length){ newText = newText.clean(""); }

        var html = '';
        for(var i in newText){
            var keyword = newText[i];
            if(typeof keyword == 'string'){
                html += '<span class="keyword" data-key="'+ keyword +'">' + keyword + '</span> ';
            }
        }

        $self.html(html);
    });

    $slider.find('.keyword').each(function(){
        var $this = $(this),
            position = $this.position();
        $this.css(position).data('position', position);
    }).promise().done(function(){
        $(this).css('position', 'absolute');
    });


    var blockedClick = false;
    $('.arrow').click(function(e){
        e.preventDefault();

        if(blockedClick === false){
            blockedClick = true;
            slide( $(this).hasClass('arrow-prev') ? 'left' : 'right' );
        }
    });

    var timeout = null;
    var slide = function(direction){

        var $nextSlide, $currentSlide;
        $currentSlide = $slides.filter('.active');

        if(direction == 'right'){
            $nextSlide = $currentSlide.next('.slide');
        }else{
            $nextSlide = $currentSlide.prev('.slide');
        }

        if(!$nextSlide.length){
            blockedClick = false;
            return;
        }

        $currentSlide.removeClass('to-left to-right');

        var translate = slideWidth * ($nextSlide.index());

        $wrapper.css('transform', 'translateX('+ -translate + 'px)');

        var $currentKeywords = $currentSlide.find('.keyword'),
            $nextKeywords = $nextSlide.find('.keyword');

        $nextKeywords.show().each(function(){
            var $next = $(this),
                nextKey = $next.data('key');

            $currentKeywords.each(function(){
                var $current = $(this),
                    currentKey = $current.data('key');

                if(nextKey == currentKey){
                    $current.css($next.position()).css('transform', 'translateX('+ ( direction == 'left' ? -slideWidth : slideWidth) + 'px)');
                }
            });
        }).promise().done(function(){
            var x = 0;

            $currentKeywords.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                ++x;

                if(x == $(this).length){
                    $currentSlide.removeClass('active');
                    $nextSlide.addClass('active');

                    blockedClick = false;

                    clearTimeout(timeout);
                    timeout = setTimeout(function(){
                        $currentKeywords.hide().css('transition', 0).each(function(){
                            var $this = $(this);
                            $this.css($this.data('position')).css('transform', '');
                        }).promise().done(function(){
                            $(this).css('transition', '');
                            blockedClick = false;
                        });
                    },500);
                }
            });
        });

    };

});
