$(".remember_id span").click(function(){
    let text = $(this).text();
    if (text == "ON") {
        $(this).text("OFF")
        $(this).css({
            background: "#C8CDD3",
            right: "29px"
        })
    } else {
        $(this).text("ON")
        $(this).css({
            background: "#448DF4",
            right: "0"
        })
    }
})