
let onButton = document.querySelector('.on')
console.log(onButton);

let offButton = document.querySelector('.off')
console.log(offButton)
onButton.addEventListener("click",()=>{
    console.log("qwertyu");
    let imgEl =document.querySelector(".image");
    imgEl.src ="/assets/lamp_2.jpg";
    let head1= document.querySelector(".h1")
    head1.classList.add("red");
    head1.innerHTML = "Lamp is on"
} )


offButton.addEventListener("click",()=>{
   
    let imgEl = document.querySelector(".image");
    imgEl.src ="/assets/lamp-1.jpg";
    let head1 = document.querySelector(".h1");
    head1.classList.remove("red")
    head1.innerHTML="Lamp is off"
})