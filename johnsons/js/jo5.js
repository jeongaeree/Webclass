$(document).ready(function(){
   document.querySelector(".product_ul").innerHTML = getItemFromArray(productList)
   $(".all_menu>li").click(function(){
    let cate = $(this).attr("data-cate")
    document.querySelector(".product_ul").innerHTML = getItemFromArray(productList,cate)

    //탭메뉴기능

    let allmenu = $(".all_menu>li");
    let productul = $(".product_ul>li");

    productul.hide().eq(0).show();

    allmenu.click(function () {
    let target = $(this);
    let index = target.index();

    allmenu.removeClass("on");
    target.addClass("on");
    productul.css("display", "none");
    productul.eq(index).css("display", "block");
  });




   })
})

