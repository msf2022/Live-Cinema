




// console.log("456")

let links = document.querySelectorAll(".epsoid-link");
console.log(links.length);
links.forEach((link)=>{
    link.addEventListener("click",function(e){
        links.forEach((link)=>{
            link.classList.remove("active-link");
        })
        console.log(links.length)
        e.currentTarget.classList.add("active-link");
    })
})



let  epsnumber = document.getElementById("eps-number");

let number = epsnumber.innerText


for(let i=0;i<links.length;i++){
    // console.log(links[i].innerText)
    if(links[i].innerText===number){
        links[i].classList.add("active-link")
    }
}






let epscount = document.getElementById("eps-count");
let seascount = document.getElementById("seas-count");

let seasons =document.querySelectorAll(".seas-num");
let s=seasons.length
console.log(s)
let epss = document.querySelectorAll(".eps-n");
let e = epss.length

epscount.insertAdjacentText=`[ ${e} ]`;
seascount.insertAdjacentText=`[ ${s} ]`