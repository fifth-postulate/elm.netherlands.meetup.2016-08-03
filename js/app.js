/*global Reveal:false, document:false, Elm:false*/
(function(document, Reveal){
    'use strict';

    function once(callback) {
        var alreadyRan = false;
        return function(){
            if (!alreadyRan) {
                alreadyRan = true;
                callback.call();
            }
        };
    }
    Reveal.addEventListener('brainbow', once(function(){
        var container = document.getElementById('brainbow-container');
        Elm.Main.embed(container);
   }));
})(document, Reveal);
