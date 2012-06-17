Keyboard Scroll
===============
A jQuery plugin to scroll through HTML elements with the keyboard.

Say you have webpage with multiple elements (eg. photos, divs) vertically
aligned. This plugin lets you press a key to scroll down (or up) the page until
the next (or previous) element is centered on the screen. 

This gives an alternative method for scrolling through a webpage while still
retaining the normal scrolling ability. It's useful because it a) makes it easy
to align the element properly to the screen and b) lets the user scroll with the
keyboard, which some find relaxing.

It's very similar to the j and k keys in [Google
Reader](www.google.com/reader), [Metafilter](www.metafilter.com), and [Boston
Globe's The Big Picture](http://www.boston.com/bigpicture/).

Copyright (C) 2012 Victor Gan

Project home: https://github.com/victorgan/KeyboardScroll

How to Use
----------
This plugin requires the jQuery library version 1.7.2. It may work with earlier
versions but I haven't tested it. 

On each page you wish to run KeyboardScroll, add the following to the head of
the page. Remember to make sure your path to the jquery.keyboardScroll.js file
is correct.

    <script
    src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"
    type="text/javascript"></script>
    <script src="/path/to/jquery.keyboardScroll.js"></script>

Examples
--------
Now, you want to add the ability to scroll through images that have the class
'photo' with the keys j and k (default). In addition to the code above, add
this:

    <script type="text/javascript" charset="utf-8">
      $(function() {
              $("img.photo").keyboardScroll();
      });
    </script>

Or, to allow scrolling through divs that have the class 'section' using the down
and up arrow, add this (in addition to the first code snippet):

    <script type="text/javascript" charset="utf-8">
      $(function() {
              $("div.section").keyboardScroll(
              {
                downKeyCode     : 40,   // 40 == down arrow
                upKeyCode       : 38,   // 38 == up arrow
              });
      });
    </script>

Parameters
----------
KeyboardScroll has three optional parameters that can be set. This is done by:

    <script type="text/javascript" charset="utf-8">
      $(function() {
              $("div.section").keyboardScroll(
              {
                downKeyCode     : 74,   // 'j'
                upKeyCode       : 75,   // 'k'
                scrollDuration  : 100   // in milliseconds
              });
      });
    </script>

Where
- 'downKeyCode' specifies the key to press to scroll down an image. The default
  is j (key code 74)
- 'upKeyCode' specifies the key to press to scroll up an image. The default is k
  (key code 75)
- 'scrollDuration' specifies the time the scroll animation takes when scrolling.
  The default is 100 ms.

Errata
------
###Why j and k as defaults?
They mimic the up and down movements of a popular text editor Vi.

Licensing
---------
Feel free to use this for almost any purpose.

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
