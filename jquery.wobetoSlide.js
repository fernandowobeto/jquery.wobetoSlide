(function($){
  $.fn.wobetoSlide = function(opcoes){          
    var defaults = {tempo:5000,width:500,height:500};
    var configs = $.extend(defaults,opcoes);

    var $div = $(this);
    $div.css({width:configs.width+'px',height:configs.height+'px'});
    $div.find('img:first').addClass('active');

    setInterval(function(){
      var $active = $div.find('img.active');
      $active.addClass('last-active');
      var $next =  $active.next().length ? $active.next() : $div.find('img:first');
      $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000,function(){
        $active.removeClass('active last-active');
      });
    },configs.tempo);
  }
})(jQuery);