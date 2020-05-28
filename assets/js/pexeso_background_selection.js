$('input[name=background_choice]').on("click", function(e) {
    document.body.style.backgroundImage = "url('/media/background" + this.value
                                        + ".jpg')";
});

$(document).on('input', '#transparency', function() {
    var percent = $(this).val() / 100;
    document.body.style.backgroundColor = "rgba(255, 255, 255, "
                                        + percent + ")";
    $("#transparency_output").html($(this).val() + " %");
});
