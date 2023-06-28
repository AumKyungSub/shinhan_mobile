
// 주식 슬라이드 fixed
// let headerHeight = $('header').height();
// let stockSlideHeight = $('.stock_slide').height();
// let fixedStart = headerHeight + stockSlideHeight;

// $(window).scroll(function(){
//     let scrollNum = $(window).scrollTop();

//     if(scrollNum > fixedStart) {
//         $('.stock_slide').css({
//             position : "fixed",
//             top : "-30px",
//             zIndex: "999"
//         })
//         $('.stock_slide ul li').css({
//             width: "10%"
//         })
//         $(".stock_slide ul").css({            
//             animation: "chart_slider_ani_2 cubic-bezier(0,0,0,0) 15s",
//             animationIterationCount: "infinite"
//         })
//     }else{
//         $('.stock_slide').css({
//             position : "static",
//         })
//         $('.stock_slide ul li').css({
//             width: "36.666666666666664%"
//         })
//         $(".stock_slide ul").css({            
//             animation: "chart_slider_ani cubic-bezier(0,0,0,0) 20s",
//             animationIterationCount: "infinite"
//         })

//     }

// })
// Article1 stock_slide list 복사
let list_parent = $(".stock_slide ul");
let list = $(".stock_slide");

function copies() {
    list_parent.each(function () {
        let copy = $(this).html();
        list_parent.append(copy);
        console.log(copy);
    });
}
copies();

// ul 동적 길이
let list_width = Number($(".stock_slide ul li").outerWidth(true));
let list_count = Number($(".stock_slide ul li").length/2);
let ul_width = list_width*list_count;

list_parent.css({
    width : ul_width
})


//  주식 슬라이드 호버(터치) 시 멈춤
function list_hover_play() {
    list.on({
        touchstart: function () {
            list_parent.css({ animationPlayState: "paused" });
        },
        touchend: function () {
            list_parent.css({ animationPlayState: "running" });
        },
    });
}
list_hover_play()

// Section 2 Tab Menu
const tabButton = $('.sec_2_button_cover button');
for(let i = 0;i<tabButton.length;i++){
    tabButton.eq(i).click(function(){
        $(this).addClass('selected_button');
        $(this).siblings().removeClass('selected_button');
        $(this).parent().siblings('table').hide();
        $(this).parent().siblings('.sec_2_table_'+i).show();
    })
}

// Change color based on positive or negative
const updownChart = $('.change_color');

let set
for(let i = 0;i<updownChart.length;i++){
     set= Number(updownChart.eq(i).text());

    if(set > 0){
        updownChart.eq(i).css({
            color:"#F14C52"
        });
        updownChart.eq(i).siblings(".change_color_prev").css({
            color:"#F14C52"
        })
        updownChart.eq(i).children('span').children('img').attr("src", "./images/main/changecolor1.png");
    } else if (set == 0){
        updownChart.eq(i).css({
            color:"#A6A5AA"
        });
        updownChart.eq(i).siblings(".change_color_prev").css({
            color:"#A6A5AA"
        })
        updownChart.eq(i).children('span').children('img').attr("src", "./images/main/changecolor0.png");
    }else{
        updownChart.eq(i).css({
            color:"#4B5CC6"
        });
        updownChart.eq(i).siblings(".change_color_prev").css({
            color:"#4B5CC6"
        })
        updownChart.eq(i).children('span').children('img').attr("src", "./images/main/changecolor2.png");

    }
}

// If click hamburger menu, show up GNB.
$(".toggle").click(function(){
    $("#wrap").css({
        display:"none"
    })
    $(".gnb_bar").css({
        display:"none"
    })
    $(".gnbWrap").css({
        display:"block"
    })
})
