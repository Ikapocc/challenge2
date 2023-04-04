let numerorandom1 = Math.floor(Math.random()*100)
let numerorandom2 = Math.floor(Math.random()*100)
let numerorandom3 = Math.floor(Math.random()*100)
let numerorandom4 = Math.floor(Math.random()*100)

let reaction1 = document.querySelectorAll(".prom-grade")[0].innerHTML = numerorandom1
let reaction2 = document.querySelectorAll(".prom-grade")[1].innerHTML = numerorandom2
let reaction3 = document.querySelectorAll(".prom-grade")[2].innerHTML = numerorandom3
let reaction4 = document.querySelectorAll(".prom-grade")[3].innerHTML = numerorandom4

let resultado = document.querySelector(".grade1").innerHTML = Math.floor((reaction1 + reaction2 + reaction3 + reaction4) / 4)