$(document).ready(function(){


    let count = 0;
    $(".btnNext").click(function(e){
        e.preventDefault() //클릭했을때 a태그인 기본기능을 억제(스크롤바가 가장위로 올라가는 현상방지)
        count++;
        if(count>4){
            count=0;
        }
        $(".train").css("transform","translateY("+(count*-20)
        +"%)")
    })

    $(".btnPrev").click(function(e){
        e.preventDefault() //클릭했을때 a태그인 기본기능을 억제(스크롤바가 가장위로 올라가는 현상방지)
        count--;
        if(count<0){
            count=4;
        }
        $(".train").css("transform","translateY("+(count*-20)
        +"%)")
    })

    let timer = setInterval(function(){
        count++        
        if(count>4){count=0}
        moveSlider(count)

    },2000)
    $(".station"),mouseover(function(){
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
        $(".train").css("transform","translateY("+(-20*idx)+"%)")        
    }

   
})