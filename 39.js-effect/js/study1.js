$(document).ready(function(){

    //btnMenu클래스 버튼을 클릭했을 때 nav태그가 보이게 되도록 기능


    let gnbState = false;

   

    $(".btnMenu").click(function(){



       

        $("nav").hasClass("on")

        if($("nav").hasClass("on")==false){
        //메뉴가 닫혀있는 상태 -> 메뉴를 여는 기능
            $("nav").addClass("on")
            gnbState = true
        }else{
        //메뉴가 열려있는 상태 -> 메뉴를 닫는 기능
        $("nav").removeClass("on")
        gnbState = false
    }

    })

    
    $(".gnb>li").click(function(){

        if($(this).hasClass("on")==true){
            $(this).css("height","50px")
            $(this).removeClass("on")
            

        }else{
            $(".gnb>li").css("height","50px")
            $(".gnb>li").removeClass("on")
            let li2dep = $(this).children("ul").children().length
            $(this).css("height",(li2dep+1)*50+"px")
            $(this).addClass("on")

        }

         //리스트 클릭했을 때 내가 클릭한 리스트한테 on클래스가 있다/ 없다
        $(".gnb>li").css("height","50px")
        //여러개의 리스트 중 내가 클릭한 리스트가 포함하고있는 2뎁스 ul태그의 자식 li태그의 개수를
        // 구해서 그 개수에 비례한 만큼의 값으로 클릭한 리스트의 높이를 지정
        //about클릭 -> 높이 150
        //profile 클릭 -> 높이 200
        let li2depth = $(this).children("ul").children().length
        $(this).css("height",(li2depth+1)*50+"px")   
        
       });
       $(".gnb li").click(function(){
        return false
        
       })

})
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
  