$(document).ready(function(){
    //문서가 다 읽힌 뒤 한번 실행되는 소스코드

    $(".box").click(function(){
        alert("박스")
    })

    $(".btn").click(function(){
        alert("스팬")
        return false
    })
})