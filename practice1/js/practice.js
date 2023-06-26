$(document).ready(function(){
    $(".tabmenu>dt").click(function(){
        $(".tabmenu>dt").removeClass("on")
        $(this).addClass("on")

        $(".tabmenu>dd").removeClass("on")
        $(this).next().addClass("on")

    })
})