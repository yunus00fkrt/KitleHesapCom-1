function CalculateYourEndex(boy,kilo) {
    endeks= kilo/((boy/100)**2)
    endeks=Number(endeks.toFixed(2));
    return endeks;
}

let gainWeight="https://www.youtube.com/embed/NvUWSRJTZkU";
let loseWeight="https://www.youtube.com/embed/SaKOcCnQzjQ";
let keepFit="https://www.youtube.com/embed/4HPvh2q5Xjk";
let obesity="https://www.youtube.com/embed/Qxqn3EB3jmI";

function hesapla(){

    let size=document.getElementById("size").value

    let weight=document.getElementById("weight").value
   
    let endex= CalculateYourEndex(size,weight)
    action(endex)
    alert(endex)
}

function action(endeks) {

    let linkSec=document.getElementById("youtube")
    let hesaplandiTrue = document.getElementById("hesaplandiTrue")
    hesaplandiTrue.style.display = "initial"
    if(endeks<=18.4){
        linkSec.src=gainWeight;
    }
    else if(endeks>18.4 && endeks<=24.9){
       linkSec.src=keepFit;
    }
    else if(endeks>24.9 && endeks<=29.9){
       linkSec.src=loseWeight;
    }
    else if(endeks > 29.9) {
        linkSec.src=obesity;
    }
    else{
        console.log("Boş değer girildi.")
        hesaplandiTrue.style.display = "none"
    }
}

function clear() {
    let hesaplandiTrue = document.getElementById("hesaplandiTrue")
    hesaplandiTrue.style.display = "none"
    console.log("clear calisti.")
} 