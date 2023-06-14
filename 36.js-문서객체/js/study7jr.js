$(document).ready(function(){
    $(".tabMenu>dt").click(function(){
        
        $(".tabMenu>dt").removeClass("on")
         //1.dt태그들이 on클래스가 지워져야함
        $(this).addClass("on")
         //2.내가 클릭한 dt태그한테만 on클래스가 추가
    
    })        
})

        






