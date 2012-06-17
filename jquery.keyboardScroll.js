// Keyboard Scroll
// ===============
// A jQuery plugin to scroll up and down through elements by typing a key
// Requires: jQuery version 1.7.2
// Copyright (C) 2012 Victor Gan - victorgan@gmail.com - vgan.ca
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// Project home: https://github.com/victorgan/KeyboardScroll
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

        function scrollTo(coordinate, scrollDuration) {
		    $('html,body').animate({ scrollTop: coordinate }, scrollDuration);
        } //scrollTo

        function scrollToMiddle(scrolledElement, scrollDuration) {
            var offset = $(window).height() / 2 - scrolledElement.height() / 2;
            var middleOfElement = scrolledElement.offset().top - offset;
            scrollTo(middleOfElement, scrollDuration);
        }//scrollToMiddle

        function isMiddleElement() {
            // Returns true if 'this' is the most middle element on the screen.
            // All elements must be the same height.
            // True for element2, false for element1 and element3:
            // ---------------  <- topFold
            // |              |           
            // |   --------   |           
            // |  |element1|  |           
            // |   --------   |           
            // |              | <- topLimit           
            // |   --------   |     <- topOfElement
            // |  |element2|  | <- bottomLimit          
            // |   --------   |     <- bottomOfElement
            // |              |           
            // |   --------   |
            // |  |element3|  |
            // ---------------  <- bottomFold
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

            var element = elements.filter(isMiddleElement).first();
            if ((evt.keyCode === downKeyCode || evt.keyCode === upKeyCode) &&
                element.length) {

                var topFold = $(window).scrollTop();
                var bottomFold = topFold + $(window).height();
                var topOfElement = element.offset().top;
                var topLimit = Math.floor((topFold + bottomFold) / 2 - element.height() / 2);

                var scrolledElement;
                var tolerence = 5; //for innacurate topFold/bottomFold values
                if (evt.keyCode === downKeyCode) { 
                    if ( topOfElement > (topLimit + tolerence)) {
                        scrolledElement = element;
                    }
                    else if (!element.is(elements.last())){
                        scrolledElement = element.next(elements);
                    }
                }
                else if (evt.keyCode === upKeyCode) { 
                    if ( topOfElement < (topLimit - tolerence)) {
                        scrolledElement = element;
                    }
                    else if (!element.is(elements.first())){
                        scrolledElement = element.prev(elements);
                    }
                }

                if (scrolledElement.length) {
                    scrollToMiddle(scrolledElement, settings.scrollDuration) 
                }
            } // if ((evt.keyCode... 
            else if (evt.keyCode === downKeyCode && elements.first().length) {
                scrollToMiddle(elements.first(), settings.scrollDuration) 
            } 
            else if (evt.keyCode === upKeyCode && elements.last().length) {
                scrollToMiddle(elements.last(), settings.scrollDuration) 
            } 
            
        }); // $(document).keydown(function (evt) 

    }; // $.fn.keyboardScroll = function() 
})( jQuery );
