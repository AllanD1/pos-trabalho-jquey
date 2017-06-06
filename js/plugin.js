(function($) {
    $.fn.subVogal = function() {
        this.each(function() {
            var pLorem = $(this).html();
            pLorem = pLorem.replace('e', 'enter');
            pLorem = pLorem.replace('i', 'inis');
            pLorem = pLorem.replace('o', 'omber');
            pLorem = pLorem.replace('u', 'ufter');
            pLorem = pLorem.replace('a', 'ais');           
            $(this).html(pLorem);
        });
        return this;
    }
})(jQuery);

$(document).ready(function() {
    $('#sub-vogal').subVogal();
})