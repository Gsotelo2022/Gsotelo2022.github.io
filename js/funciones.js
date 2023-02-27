const tabs=document.querySelectorAll('.tab_btn');
const all_content=document.querySelectorAll('.content');

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
        var line=document.querySelector('.line');
        line.style.width= e.target.offsetWidth+ "px";
        line.style.left= e.target.offsetLeft+ "px";
        all_content.forEach(content=>{content.classList.remove('active')});
        all_content[index].classList.add('active');
    })
})
/*Acerca de mi*/
var text=document.getElementById("nombre");
var str=text.innerHTML;

text.innerHTML ="";
var speed=250;
var i=0;
var c=0;

function escribir(){
    if(i<str.length&&c<3){
        text.innerHTML+=str.charAt(i);
        i++;
        setTimeout(escribir,speed);
    }
}
setTimeout(escribir,speed);

/*Formacion*/
document.querySelector(".thefront").addEventListener("mouseover",activar);
document.querySelector(".theback").addEventListener("mouseout",desactivar);

document.querySelector("#front2.thefront").addEventListener("mouseover",activar2);
document.querySelector("#back2.theback").addEventListener("mouseout",desactivar2);

document.querySelector("#front3.thefront").addEventListener("mouseover",activar3);
document.querySelector("#back3.theback").addEventListener("mouseout",desactivar3);

/*Cards*/
var card1=document.querySelector("#card1.thecard");
var card2=document.querySelector("#card2.thecard");
var card3=document.querySelector("#card3.thecard");


function activar(){
    card1.classList.toggle("activar-carta");
    card1.classList.toggle("desactivar-carta");  
}
function desactivar(){
    card1.classList.toggle("activar-carta");
    card1.classList.toggle("desactivar-carta");
}

function activar2(){  
    card2.classList.toggle("activar-carta");
    card2.classList.toggle("desactivar-carta");
}
function desactivar2(){
    card2.classList.toggle("activar-carta");
    card2.classList.toggle("desactivar-carta");
}

function activar3(){  
    card3.classList.toggle("activar-carta");
    card3.classList.toggle("desactivar-carta");
}
function desactivar3(){
    card3.classList.toggle("activar-carta");
    card3.classList.toggle("desactivar-carta");
}

