const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event){
    jump();

});
// так как classList явл. geterom у него есть метод add();
// function jump() {
// dino.classList.add("jump");
//
// }

function jump() {
if (dino.classLis!= "jump"){
    dino.classList.add("jump")
}
setTimeout(function(){
    dino.classList.remove('jump')
}, 300)

}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert("CAME OVER!!")
    }
},10)
