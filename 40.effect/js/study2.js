// .floatingTxt h1 b:nth-of-type(2){animation: introAni 1s ease 0.25s forwards;}
// .floatingTxt h1 b:nth-of-type(3){animation: introAni 1s ease 0.5s forwards;}
// .floatingTxt h1 b:nth-of-type(1){animation: introAni 1s ease 0s forwards;}
// .floatingTxt h1 b:nth-of-type(4){animation: introAni 1s ease 0.75s forwards;}
// .floatingTxt h1 b:nth-of-type(5){animation: introAni 1s ease 1s forwards;}
// .floatingTxt h1 b:nth-of-type(6){animation: introAni 1s ease 1.25s forwards;}
// .floatingTxt h1 b:nth-of-type(7){animation: introAni 1s ease 1.5s forwards;}
// .floatingTxt h1 b:nth-of-type(8){animation: introAni 1s ease 1.75s forwards;}
// .floatingTxt h1 b:nth-of-type(9){animation: introAni 1s ease 2s forwards;}
// .floatingTxt h1 b:nth-of-type(10){animation: introAni 1s ease 2.25s forwards;}
// .floatingTxt h1 b:nth-of-type(11){animation: introAni 1s ease 2.5s forwards;}
// .floatingTxt h1 b:nth-of-type(12){animation: introAni 1s ease 2.75s forwards;}
// .floatingTxt h1 b:nth-of-type(13){animation: introAni 1s ease 3s forwards;}
// .floatingTxt h1 b:nth-of-type(14){animation: introAni 1s ease 3.25s forwards;}

$(document).ready(function(){
    // let animationTerm = 0.1
    // let animationDuration = 5
    // console.log($(".floatingTxt h1 b").length) 선택한 태그들은 배열형태로 리턴된다 그래서 배열의 원소의 개수를 .length를 통해 구해볼 수 있다.
  
    // for(let i=0 ; i<$(".floatingTxt h1 b").length ; i++){
    //     $(".floatingTxt h1 b:nth-of-type("+(i+1)+")").css("animation"," introAni "+ animationDuration*i +"s ease "+(animationTerm*i)+"s forwards")
    
    // opacity:0;
    // line-height:1 ;
    // display:inline-block;

    textAni(".floatingTxt",{
        aniDelay:0.2,
        aniSpeed:0.7,
        textSize:50
    })
    textAni(".txtbox",{
        aniDelay:1,
        aniSpeed:0.5,
        textSize:90
    })

})



    
   