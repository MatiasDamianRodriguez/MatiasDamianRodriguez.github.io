
let boton_exp= document.getElementById("boton_exp");

let bot_exp= document.getElementById("bot_exp");

boton_exp.addEventListener("click", llamar );

function llamar(){
    bot_exp.classList.toggle("show");
}


let boton_edu= document.getElementById("boton_edu");

let bot_edu= document.getElementById("bot_edu");
boton_edu.addEventListener("click", llamar2 );


function llamar2(){
    bot_edu.classList.toggle("show");
}


let boton_info= document.getElementById("boton_info");

let bot_inf= document.getElementById("bot_inf");

boton_info.addEventListener("click", llamar3 );

function llamar3(){
    bot_inf.classList.toggle("show");
}


let boton_refer= document.getElementById("boton_refer");

let bot_ref= document.getElementById("bot_ref");

boton_refer.addEventListener("click", llamar4 );

function llamar4(){
    bot_ref.classList.toggle("show");
}