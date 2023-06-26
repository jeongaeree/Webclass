$(document).ready(function(){
    let count = 0;
    setInterval(function(){
        count++;
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li:nth-of-type("+(count+1)+")").addClass("on")
    },2500)

})