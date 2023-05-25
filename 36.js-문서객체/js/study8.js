window.onload = function(){
    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelectorAll(".tabDes")
    let tabDescription = [
    `<h3>title1</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, fuga sunt. Dolore fugit perspiciatis repudiandae corrupti animi omnis, ad cumque recusandae deserunt, officiis iste tenetur impedit corporis placeat nemo temporibus.</p>`,
   `<h3>title2</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, fuga sunt. Dolore fugit perspiciatis repudiandae corrupti animi omnis, ad cumque recusandae deserunt, officiis iste tenetur impedit corporis placeat nemo temporibus.</p>`,
    `<h3>title3</h3>
    <ul>
        <li>des1</li>
        <li>des2</li>
        <li>des3</li>
        <li>des4</li>
    </ul>`
]

    for(let i=0 ; i<tabTitles.length ; i++){
        tabTitles[i].addEventListener("click",function(e){

        for(let j=0 ; j<tabTitles.length ; j++){
            tabTitles[j].classList.remove("on")
        }
        this.classList.add("on")

        tabDes.innerHTML = tabDescription[i]
        })
    }
}





    
//     

//             // for(let j=0 ; j<dtList.length ; j++){
//             //     dtList[j].classList.remove("on")           
//             // }
            
//     })
//     }
// }





// for(let i=0 ; i<dtList.length ; i++){
//     dtList[i].addEventListener("click",function(){
//         // dtList[0],classList.remove("on")
//         // dtList[1],classList.remove("on")
//         // dtList[2],classList.remove("on")
//         for(let j=0 ; j<dtList.length ; j++){
//             dtList[j].classList.remove("on")
//         }






//         this.classList.add("on")
//         // 클릭하는 맥락안에서 클릭한 태그를 this로 표현할 수 있다.
