window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
        slidesPerView:2,
        pagination: {
            el: '.news_pagination',
            clickable : true,
        },
        breakpoints:{
            280:{
                slidesPerView : 1,
            },
            768:{
                slidesPerView : 3,
            }
        }       
  
      
})


  let noticeSlider = new Swiper(".notice_station",{
    
        breakpoints:{
            280:{
                slidesPerView : 1,
            },
            768:{
                slidesPerView : 4,
                spacebetween : 20
            }
        },
        pagination: {
            el: '.notice_pagination',
            clickable: true,

        },
  
      
})

}

//객체 -> 어떤 사물을 표현하기 위해
// let person1 = {
//     name : "정현진",
//     age : 38,
//     score : {
//         ko:100,
//         en:50,
//         math:88
//     },
//     friends : {
//         oldfriends : ['상수','시홍','현종'],
//         schoolfriends : ['민수','영훈','민주'],
//     } 
// }