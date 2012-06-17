Keyboard Scroll
===============
A jQuery plugin to scroll through HTML elements with the keyboard.

Copyright (C) 2012 Victor Gan

Project home: https://github.com/victorgan/KeyboardScroll

Dependencies
------------
This plugin requires the following javascript files:
 -jQuery (version 1.7.2)
 -jQuery.scrollTo (version 1.4.2) (uses scrollTo function)

Examples
--------
To allow scrolling through images with class 'photo' using keys 'j' and 
'k' (default), include the following in your HTML page:

    <script type="text/javascript" charset="utf-8">
      $(function() {
              $("img.photo").keyboardScroll();
      });
    </script>

To allow scrolling through divs with class 'section' using the down and
up arrow, include the following in your HTMl page:

    <script type="text/javascript" charset="utf-8">
      $(function() {
              $("div.section").keyboardScroll(
              {
                downKeyCode     : 40,   // 40 == down arrow
                upKeyCode       : 38,   // 38 == up arrow
              });
      });
    </script>

Licensing
---------
Feel free to use this for pretty much any purpose.

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
