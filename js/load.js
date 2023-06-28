$(".gnbWrap").load("./module/gnb.html", function(){
    // If click the back button, back to the main page
    $(".back_to_main").click(function(){
        $(".gnbWrap").css({
            display:"none"
        })
        $("#wrap").css({
            display:"block"
        })
        $(".gnb_bar").css({
            display:"block"
        })
    })

    // Exit Button
    $(".gnb_left_turn_off").click(function(){
        window.close();
    })

    // Left Menu Tab from GNB
    const gnbtab = $('.gnb_left_top_menu li');
    const gnbtabright = $('.gnb_right div')
    for(let i = 0;i<gnbtab.length;i++){
        gnbtab.eq(i).click(function(){
            gnbtabright.eq(i).css({
                display : "block"
            })
            gnbtabright.eq(i).siblings().css({
                display : "none"
            })
            $(this).addClass('gnb_left_select');
            $(this).siblings().removeClass('gnb_left_select');
        })
    }
    
});
