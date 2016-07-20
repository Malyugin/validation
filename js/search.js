$(window).load(function () {
    $('#search').bind('keyup',function () {
        $('.my-new-list').remove();
        var searchField = $('#search').val().trim();
        var regex = new RegExp(searchField, "i");
        var result = [];
        $.getJSON('js/players.json', function (data) {
            $.each(data, function (key, val) {
                for (var i in val ) {
                    if (val[i] !== null && (val[i].toString().search(regex) != -1)) {
                        result.push('<li>' + val.name + '</li>');
                        break;
                    }
                }
            });
            $('<ul/>', {
                'class': 'my-new-list',
                html: result.join('')
            }).appendTo('.result');
        });
    });
});