$(document).ready(function(){

    /* 페이드아웃 */

    let count = 0;
    setInterval(function(){
        count++;
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")

    },2500);

    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")

        $(".tabMenu>dd").removeClass("on")
        $(this).next().addClass("on")
    })

    $(".btnPopup").click(function(){
        $(".popup").addClass("on")
    })

    $(".btnPopupClose").click(function(){
        $(".popup").removeClass("on")
    })

})


$(documnet).ready(function(){
    let count = 0;
    setInterval(function(){
        count++;
        
    })
})