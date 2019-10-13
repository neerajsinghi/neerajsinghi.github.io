'use strict';
$(document).ready(function () {

    

    $('.ssa').addClass('mast__title');
    $('.sa').addClass('mast__text');
    var s,
        spanizeLetters = {
            settings: {
                letters: $('.js-spanize')
            },
            init: function() {
                s = this.settings;
                this.bindEvents();
            },
            bindEvents: function(){
                s.letters.html(function (i, el) {
                    //spanizeLetters.joinChars();
                    var spanizer = $.trim(el).split("");
                    return '<span>' + spanizer.join('</span><span>') + '</span>';
                });
            }
        };
    spanizeLetters.init();
});