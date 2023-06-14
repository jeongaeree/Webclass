$(document).ready(function(){

    // let count = 0;
    $(window).scroll(function(){
        // count++
        // console.log(count+"회 스크롤을 하였습니다.")

        let winSCT =$(window).scrollTop()
        console.log(winSCT)
        // if(winSCT>400){
            // alert"400이상 아래로 스크롤해서 내려왔습니다."
        //     $("body").addClass("dark")
        // }else{
        //     $("body"),removeClss("dark")
        // }

        if(winSCT>400 && winSCT<1500){
            $("body").css("background","red")
        }else{
            $("body").css("background","transparent")
        }

    })
})