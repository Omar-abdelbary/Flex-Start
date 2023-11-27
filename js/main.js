$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 3 ,
        margin :10 , 
        dots :false ,
        nav : false ,
        loop : true , 
        autoplay : true , 
        autoplayTimeout : 2000 ,
        

    });
});


//  end owl-carousel 



//  scroll-top 

let btn_top = document.querySelector(".up .top") ; 
// console.log(span);



btn_top.addEventListener("click" , function () {


    window.scrollTo({
        top:0 , 
        behavior: "smooth" , 

    }) ; 

})


window.onscroll = function () {
    if (window.scrollY > 100) {
        btn_top.classList.add("scroll-right")
    } else {
        btn_top.classList.remove("scroll-right")
    }
} 


//     end scroll-top