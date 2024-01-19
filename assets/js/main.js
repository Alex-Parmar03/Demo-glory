// navigation 
let nav = document.querySelector(".nav-btn");
nav.addEventListener("click", function(){
    document.querySelector(".nav-title").classList.toggle("block");
});

function secondary_nevigation(){
    document.querySelector(".secondary-nev").classList.toggle("mega-nav-block");
}

// accordion
let accordionitems = document.querySelectorAll(".accordion-item");

accordionitems.forEach(item => {
    let lable = item.querySelector(".accordion-lable");
    let content = item.querySelector(".accordion-content");
    lable.addEventListener('click', function() {
        for( i = 0; i < accordionitems.length; i++){
            if(accordionitems[i] == item){
                item.classList.toggle("active");
            }
            else{
                accordionitems[i].classList.remove("active");
            }
        }        
});
});

// tabs
let tabbtn = document.querySelector(".tab-btn");

tabbtn.addEventListener('click', function(){
    document.querySelector('.tab-content').classList.toggle('block');
})