// window.onload = function(){
//     let dtList = document.querySelectorAll(".tabMenu>dt")


//     for(let i=0 ;  i<dtList.length ;  i++){
//         dtList[i].addEventListener("click",function(){
//             for(let j=0 ; j<dtList.length ; j++){
//                 dtList[j].classList.remove("on")
                
//             }
//             this.classList.add("on")
//         })
//     }

//     let dtlist = document.querySelectorAll(".tabMenuB>dt")


//     for(let i=0 ;  i<dtList.length ;  i++){
//         dtlist[i].addEventListener("click",function(){
//             for(let j=0 ; j<dtlist.length ; j++){
//                 dtlist[j].classList.remove("on")
                
//             }
//             this.classList.add("on")
//         })
//     }
// }


function tab(classname){
    let tab = document.querySelectorAll("."+classname+">dt")
    for(let i=0 ;  i<tab.length ;  i++){
        tab[i].addEventListener("click",function(){
            for(let k=0 ; k<tab.length ; k++){
                tab[k].classList.remove("on")                
            }
            this.classList.add("on")
        })
    }
}

window.onload = function(){
tab("tabMenu")
tab("tabMenuB")
}