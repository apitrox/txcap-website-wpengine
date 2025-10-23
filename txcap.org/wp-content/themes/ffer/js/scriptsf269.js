// remap jQuery to $
(function ($) {

    /* trigger when page is ready */
    $(document).ready(function (){

        $('.page-articles-title').on('click', function(event){
            $('.page-articles').slideToggle(function(event){
                var img_src = $('.page-articles-title-img').attr('src');
                if( $('.page-articles').is(':visible') == false )
                {
                    img_src = img_src.replace('down', 'top');
                    $('.page-articles-title-img').attr('src', img_src);
                }
                else
                {
                    img_src = img_src.replace('top', 'down');
                    $('.page-articles-title-img').attr('src', img_src);
                }
            });

        });
    });

}(window.jQuery || window.$));

(function ($, root, undefined) {
	
	$(function () {		
        $('.menu-item').has('ul').hover(function() {
            $(this).parents().toggleClass('expand');
        });
        
        $(".nav-button").click(function () {
            $(".nav-button,.primary-nav").toggleClass("open");
        });     
        
        $('.menu-item').has('ul').click(function () {
            $(this).toggleClass('sub');
            $(this).parents().toggleClass('expand_touch');
        });
        
	});
	
})(jQuery, this);
