$('input[name=background_choice]').on("click", function(e) {
    switch (this.value) {
        case "1":
            document.body.style.backgroundImage = "url('/media/background1.jpg')";
            break;
        case "2":
            document.body.style.backgroundImage = "url('/media/background2.jpg')";
            break;
        case "3":
            document.body.style.backgroundImage = "url('/media/background3.webp')";
            break;
        case "4":
            document.body.style.backgroundImage = "url('/media/background4.jpg')";
            break;
    };
});

$(document).on('input', '#transparency', function() {
    var percent = $(this).val() / 100;
    document.body.style.backgroundColor = "rgb(255, 255, 255, " + percent + ")";
    $("#transparency_output").html($(this).val() + " %");
});
