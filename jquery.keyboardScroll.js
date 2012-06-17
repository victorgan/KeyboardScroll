// Keyboard Scroll
// ===============
// A jQuery plugin to scroll up and down through elements by typing a key
//
// Requires the following javascript files:
//  -jQuery (version 1.7.2)
//  -jQuery.scrollTo (version 1.4.2) (uses scrollTo function)
//
// Copyright (C) 2012 Victor Gan - victorgan@gmail.com - vgan.ca
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// Project home:
//   http://vgan.ca/projects/keyboardscroll
//
// Version:  1.0 - June 16, 2012
//
// Examples :
// 1. To allow scrolling through images with class 'photo' using keys 'j' and 
// 'k' (default), include the following in your HTML page:
//     <script type="text/javascript" charset="utf-8">
//       $(function() {
//               $("img.photo").keyboardScroll();
//       });
//     </script>
// 2. To allow scrolling through divs with class 'section' using the down and
// up arrow, include the following in your HTMl page:
//     <script type="text/javascript" charset="utf-8">
//       $(function() {
//               $("div.section").keyboardScroll(
//               {
//                 downKeyCode     : 40,   // 'down arrow'
//                 upKeyCode       : 38,   // 'up arrow'
//               });
//       });
//     </script>

(function ($) {
    $.fn.keyboardScroll = function (options) {
 
        var elements = this;
        var settings = {
            downKeyCode     : 74,   // 'j'
            upKeyCode       : 75,   // 'k'
            scrollDuration  : 100   // in milliseconds
        };
        $.extend(settings, options);

        function isMiddleElement() {
            var topFold = $(window).scrollTop();
            var bottomFold = topFold + $(window).height();
            var topOfElement = $(this).offset().top;
            var bottomOfElement = topOfElement + $(this).height();

            var topLimit = Math.floor((topFold + bottomFold) / 2 - $(this).height() / 2);
            var bottomLimit = Math.ceil((topFold + bottomFold) / 2 + $(this).height() / 2);

            if (bottomOfElement >= topLimit && topOfElement < bottomLimit)
                return true;
            else 
                return false; 
        } // function isMiddleElement() 

        var downKeyCode = settings.downKeyCode;
        var upKeyCode = settings.upKeyCode;
        $(document).keydown(function (evt) {

            var onScreenElement = elements.filter(isMiddleElement).first();
            if ((evt.keyCode === downKeyCode || evt.keyCode === upKeyCode) &&
                onScreenElement.length) {

                var topFold = $(window).scrollTop();
                var bottomFold = topFold + $(window).height();
                var topOfElement = onScreenElement.offset().top;
                var elementHeight = onScreenElement.height();

                var topLimit = Math.floor((topFold + bottomFold) / 2 - elementHeight / 2);
                var bottomLimit = Math.ceil((topFold + bottomFold) / 2 + elementHeight / 2);

                var scrolledImage;
                if (evt.keyCode === downKeyCode) { 
                    if ( topOfElement > (topLimit + 5)) {
                        scrolledImage = onScreenElement;
                    }
                    else {
                        scrolledImage = onScreenElement.next(elements);
                    }
                }
                else if (evt.keyCode === upKeyCode) { 
                    if ( topOfElement < (topLimit - 5)) {
                        scrolledImage = onScreenElement;
                    }
                    else {
                        scrolledImage = onScreenElement.prev(elements);
                    }
                }
                
                if ( scrolledImage.attr('src') ) {
                    var scrolloffset = $(window).height() / 2 - elementHeight / 2;
                    var scrollDuration = settings.scrollDuration;
                    $.scrollTo(scrolledImage, scrollDuration, {offset: -scrolloffset});
                }
            } // if ((evt.keyCode === downKeyCode || evt.keyCode === upKeyCode).. 
            
        }); // $(document).keydown(function (evt) 

    }; // $.fn.keyboardScroll = function() 
})( jQuery );
