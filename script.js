var zero = '0'
let sec = 0;
let min = 0;
let hrs = 0;

let timer;

document.querySelector("#sec").textContent = addZero(sec);
document.querySelector("#min").textContent = addZero(min);
document.querySelector("#hrs").textContent = addZero(hrs);

document.querySelector("#reset").addEventListener("click", function () {
  sec = 0;
  min = 0;
  hrs = 0;
  document.querySelector("#sec").textContent = addZero(sec)
  document.querySelector("#min").textContent = addZero(min)
  document.querySelector("#hrs").textContent = addZero(hrs)
 
});

document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(timer);
})
document.querySelector("#start").addEventListener("click", function () {    

    timer = setInterval(function () {
        document.querySelector("#sec");

        sec++;

        if (sec === 60) {
            min += 1;
            document.querySelector("#min").textContent = addZero(min);
            sec = 0;
        }

        if (min >= 60) {
            hrs += 1;
            min = 0;
            document.querySelector("#min").textContent = addZero(0)
            document.querySelector("#hrs").textContent = addZero(hrs)
        }

        document.querySelector("#sec").textContent = addZero(sec)
    }, 1000);

});

function addZero(target) {
    if (target<10) {
        target = zero + target;
    }

    return target
}