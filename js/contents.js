// Control 3 tabs
$(".return_rate").hide();
$(".organize_fund").hide();
const c3t_btn = $('.c3t_button_cover button');
for(let i=0; i<c3t_btn.length; i++){
    c3t_btn.eq(i).click(function(){
        $(this).addClass('c3t_btn_selected');
        $(this).siblings().removeClass('c3t_btn_selected');
        $(this).parent().siblings('div').hide();
        $(this).parent().siblings('.c3t_tab_0'+i).show();
    })
}


// Change color based on positive or negative
const updownChart = $('.change_color_content');

let set
for(let i = 0;i<updownChart.length;i++){
     set= Number(updownChart.eq(i).children('.ccc_cover').children('.up_down_num').text());

    if(set > 0){
        updownChart.eq(i).css({
            color:"#F14C52"
        });
        updownChart.eq(i).children('span').children('img').attr("src", "./images/main/changecolor1.png");
    } else if (set == 0){
        updownChart.eq(i).css({
            color:"#A6A5AA"
        });
        updownChart.eq(i).children('span').children('img').attr("src", "./images/main/changecolor0.png");
    }else{
        updownChart.eq(i).css({
            color:"#4B5CC6"
        });
        updownChart.eq(i).children('span').children('img').attr("src", "./images/main/changecolor2.png");

    }
}