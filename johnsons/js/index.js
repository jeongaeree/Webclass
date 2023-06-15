window.onload = function(){

  

    let station1 = new Swiper(".station1",{
     loop:true,
     direction:"horizontal",
     // slidesPerView:3, //슬라이드 개수의 반만큼 최대 적용 가능
     // spaceBetween:40,
     pagination: {
         el: '.swiper-pagination',
         type: 'bullet',
         clickable : true
       },
       
       autoplay:{
         delay:2500,
         pauseOnMouseEnter:true
       }, 
    })
    document.querySelector(".station1").addEventListener("mouseover",function(){
     station1.autoplay.stop()
    })
 
    document.querySelector(".station1").addEventListener("mouseout",function(){
     station1.autoplay.start()
    })

    $(window).scroll(function(){
      let winst = $(window).scrollTop()
      let con2top = $(".con2").offset().top
      if(winst>=con2top){
          $(".con2").addClass("on")
      }else{
          $(".con2").removeClass("on")
      }
  })
    
};




