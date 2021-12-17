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

    if(endeks<=18.4){
        linkSec.src=gainWeight;
    }
    else if(endeks>18.4 && endeks<=24.9){
       linkSec.src=keepFit;
    }
    else if(endeks>24.9 && endeks<=29.9){
       linkSec.src=loseWeight;
    }
    else{
        linkSec.src=obesity;
    }
   
}