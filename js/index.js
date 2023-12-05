

//start home page

// اخفاء مربع الحلقة من الافلام

let cards = document.querySelectorAll(".card-content[data-cat='أفلام'] .epsoid-block");


for(let i=0;i<cards.length;i++){
    cards[i].classList.add("d-none");
}


// اخفاء النوع الفارغ

let types = document.querySelectorAll(".type-item");
// console.log(types.length);

for(let z=0;z<types.length;z++){
    if(types[z].innerText === ""){
        types[z].classList.add("d-none");
    }
    
}


let transfer= 12 ;
// move trainees openion to right and left
const list = document.getElementById("list");
const left = document.getElementById("left");
const right = document.getElementById("right");
left.addEventListener("click", function () {
    
    if(transfer<2000){
        transfer-= 228 ;
    list.style.transform = "translateX("+transfer+"px)";
    }
    else{
        transfer=12;
    }

});

right.addEventListener("click", function () {
    if(transfer<2000){
        transfer+=228;
        list.style.transform = "translateX("+transfer+"px)";
    }
    else{
        transfer=12;
    }
    
});


setInterval(function(){
    if(transfer<2000){
        transfer+=228;
        list.style.transform = "translateX("+transfer+"px)";
    }
    else{
        transfer=12;
    }
},5000)



// start loading page

let preloader = document.getElementById("loader") ;

let loadingimage = document.querySelector("#loader img");

let body = document.querySelector("body");

window.addEventListener("load",function(){
    preloader.style.opacity=0;

    loadingimage.style.opacity=0;
    this.setTimeout(function(){
        preloader.style.display="none"
    },1000)

    body.style.overflow="auto";
})