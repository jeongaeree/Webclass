$(document).ready(function(){

    let count = 0;


    let perView;
    //train클래스 너비를 변경 => train클래스의 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
    let stationWidth;
    let trainWidth;

    let winWidth = $(window).width()
        
    if(winWidth>=1024){
        console.log("pc사이즈입니다.")
        perView = 2.5
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
       
    }else if(winWidth>=768){
        console.log("태블릿사이즈입니다.")
        perView = 2
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
        

    }else{
        console.log("모바일사이즈입니다.")
        perView = 1
        stationWidth = $(".station").width()
        trainWidth = stationWidth * 5 / perView
        $(".train").width(trainWidth)
    }    



    // let stationWidth = $(".station").width()
    // let trainWidth = stationWidth * 5 / perView
    // console.log(trainWidth)
    // $(".train").width(trainWidth)







    // $(".train").width(trainWidth/perView)

    

    $(window).resize(function(){
        let winWidth = $(window).width()
        
        if(winWidth>=1024){
            console.log("pc사이즈입니다.")
            perView = 2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
           
        }else if(winWidth>=768){
            console.log("태블릿사이즈입니다.")
            perView = 2
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
            

        }else{
            console.log("모바일사이즈입니다.")
            perView = 1
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }            
        
    })




    $(".btnNext").click(function(e){
        count++                  
        e.preventDefault()
        if(count>4){count=0}
        moveSlider(count)
        //기차가 왼쪽으로 500픽셀
        // $(".train").css("transform","translateX("+(-20*count)+"%)")
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--
        if(count<0){count=0}
        moveSlider(count)
        // $(".train").css("transform","translateX("+(-20*count)+"%)")
    })

    //자동슬라이드기능
   let timer = setInterval(function(){
        count++        
        if(count>4){count=0}
        moveSlider(count)

    },2000)

    $(".station").mouseover(function(){
        clearInterval(timer)

    })

    $(".station").mouseout(function(){
        timer = setInterval(function(){
            count++        
            if(count>4){count=0}
            moveSlider(count)
    
        },2000)
    })
   

    
    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")        
    }
    // moveSlider(2)






})