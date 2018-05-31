$(document).ready(function () {
    let btn = $("#search");
    let output = $('#output');

    let searchAjax = function () {
        let searchTerm = $("#search-term").val();
        let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
        $.ajax({
            url: url,
            dataType: "json",
            type: "GET",
            success: function (data) {
                console.log(data);
                output.children().remove();
                $('.parent').removeClass('parent--js');
                let dlen = data[1].length;
                for(let i = 0; i < dlen; i++) {
                    output.append('<li><a' +
                        ' href="' +data[3][i] +'" target=\"_blank\"><h3>'+ data[1][i] +'</h3><p>'+ data[2][i]+'</p></a></li>')
                };
                searchTerm.val('');
            },
            error: function(error) {
                alert('Error!!!')
            }
        });
    };

    $("#search").click(searchAjax);

    $("#search-term").keypress(function (e) {
        if (e.which == 13) {
            $("#search").click();
            return false;
        };
    });
});



