$(document).ready(function(){

    let menuState = false;


//버튼을 클릭했을 때 만약에 메뉴가 열려있는 상태라면? -> 메뉴를 닫는기능
//버튼을 클릭했을 때 만약에 메뉴가 닫혀있는 상태라면? -> 메뉴를 여는기능

    $(".btnMenu").click(function(){

        //btnMenu클래스를 클릭했을 때 실행될 동작
        if(menuState == false){
            $(".btnMenu").addClass("close")
            $("nav").addClass("show")
            menuState = true

        }else{
            $(".btnMenu").removeClass("close")
            $("nav").removeClass("show")
            menuState = false

        }
        
    })
})
