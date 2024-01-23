// navigation 
let nav = document.querySelector(".nav-btn");
nav.addEventListener("click", function () {
    document.querySelector(".nav-title").classList.toggle("block");
});

function secondary_nevigation() {
    document.querySelector(".secondary-nev").classList.toggle("mega-nav-block");
}

// accordion
let accordionitems = document.querySelectorAll(".accordion-item");

accordionitems.forEach(item => {
    let lable = item.querySelector(".accordion-lable");
    let content = item.querySelector(".accordion-content");
    lable.addEventListener('click', function () {
        for (i = 0; i < accordionitems.length; i++) {
            if (accordionitems[i] == item) {
                item.classList.toggle("active");
            }
            else {
                accordionitems[i].classList.remove("active");
            }
        }
    });
});

// tabs
// let tabbtn = document.querySelectorAll(".tab-btn");

// tabbtn.forEach(tab => {
//     let btnid = this.IDBIndex();
//     tabbtn.addEventListener('click', function (){

//         document.querySelector('.tab-content').classList.toggle('block');
//     })
// })


var tabbtn = document.querySelectorAll(".tab-btn");

    for (var i = 0; i < tabbtn.length; i++) {
      tabbtn[i].addEventListener("click", function () {
        var tabid = this.dataset.tab;
        var tabcontent = document.getElementById(tabid);
        var alltabcontent = document.querySelectorAll(".tab-content");
        var alltabbtn = document.querySelectorAll(".tab-btn");

        for (var j = 0; j < alltabcontent.length; j++) {
          alltabcontent[j].style.display = "none";
        }

        for (var k = 0; k < alltabbtn.length; k++) {
          alltabbtn[k].classList.remove("active");
        }

        tabcontent.style.display = "block";
        this.classList.add("active");
      });
    }

    document.querySelector(".tab-btn").click();