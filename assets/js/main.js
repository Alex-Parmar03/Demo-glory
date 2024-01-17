// navigation 
let nav = document.querySelector(".nav-btn");
nav.addEventListener("click", function(){
    document.querySelector(".nav-title").classList.toggle("block");
});

function secondary_nevigation(){
    document.querySelector(".secondary-nev").classList.toggle("mega-nav-block");
}

// accordion
let accordionitem = document.querySelectorAll(".accordion-item");

accordionitem.forEach(item => {
    let title = item.querySelector(".accordion-lable");
    let content = item.querySelector(".accordion-content");
    title.addEventListener('click', function() {
        for( i = 0; i < accordionitem.length; i++){
            if(accordionitem[i] == item){
                item.classList.toggle("active");
            }
            else{
                accordionitem[i].classList.remove("active");
            }
        }
        
});
});



// tabs
let tabbtn = document.querySelector(".tab-btn");

tabbtn.addEventListener('click', function(){
    document.querySelector('.tab-content').classList.toggle('block');
})