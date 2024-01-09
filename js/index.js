$(document).ready(function(){

    let ww=$(window).width();
    let wh=$(window).height();

    function layout(){
        ww=$(window).width();
        wh=$(window).height();
        $(".wrap").css({
            width:ww,
            height:wh*4
        })
        $(".page").css({
            width:ww,
            height:wh
        })
        $(".footer").css({
            width:ww,
            height:wh*0.3
        })
    }

    layout();

    $(window).resize(function(){
        layout();
    })


    let auto=setInterval(function(){
        $(".move_box").animate({
            left:-1200
        },4000,function(){
            $(".img_box").eq(0).appendTo(".move_box");
            $(".move_box").css({
                left:0
            },6000)
        })
    })

    // 메이크업 룩 박스 색깔 채우기
$(".m_box").hover(function(){
    $(this).animate({
        height:'95%'
    },1000)
},function(){
    $(this).animate({
        height:'36%'
    },1000)
})

$(".eye").hover(function(){
    $(".eye_icon").css({
        backgroundColor:"",
        opacity:0.3,
    },1000)
    $(".icon_name_1").css({
        display:"block",
    })
},function(){
    $(".eye_icon").css({
        opacity:1
    })
    $(".icon_name_1").css({
        display:"none"
    })
})
$(".lips").hover(function(){
    $(".lips_icon").css({
        backgroundColor:"",
        opacity:0.3,
    },1000)
    $(".icon_name_2").css({
        display:"block",
    })
},function(){
    $(".lips_icon").css({
        opacity:1
    })
    $(".icon_name_2").css({
        display:"none"
    })
})
$(".face").hover(function(){
    $(".face_icon").css({
        backgroundColor:"",
        opacity:0.3,
    },1000)
    $(".icon_name_3").css({
        display:"block",
    })
},function(){
    $(".face_icon").css({
        opacity:1
    })
    $(".icon_name_3").css({
        display:"none"
    })
})


})